import React, { useState } from 'react';
import { makeCredentialOptions, makeCredentials, base64url_to_base64, buffer_to_base64url } from '../api/webauthn';
import { useNavigate } from 'react-router-dom';
import './Form.css';
import Swal from 'sweetalert2';

const CredentialForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        try {
            const optionsResp = await makeCredentialOptions(username) as any;
            const options = optionsResp.credential_creation.publicKey;
            const credentialResponse = await navigator.credentials.create({
                publicKey: {
                    ...options,
                    challenge: Uint8Array.from(atob(base64url_to_base64(options.challenge)), c => c.charCodeAt(0)),
                    user: {
                        ...options.user,
                        id: Uint8Array.from(atob(base64url_to_base64(options.user.id)), c => c.charCodeAt(0)),
                    },
                },
            });
            const credential = credentialResponse as any;
            if (!credential) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Credential creation was cancelled or failed..',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            }
            const fidoFinishRequest = {
                username: username,
                session_id: optionsResp.session_id,
                credential_creation_response: {
                    authenticatorAttachment: credential.authenticatorAttachment,
                    id: credential.id,
                    type: credential.type,
                    rawId: buffer_to_base64url(credential.rawId),
                    response: {
                        clientDataJSON: buffer_to_base64url(credential.response.clientDataJSON),
                        attestationObject: buffer_to_base64url(credential.response.attestationObject),
                    },
                },
            }
            const finishResponse = await makeCredentials(fidoFinishRequest) as any;
            if (!finishResponse.ok){
                Swal.fire({
                    title: 'Error!',
                    text: 'Failed to finish credential registration',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            }
            else{
                setError('');
                Swal.fire({
                    title: 'Success!',
                    text: 'Credential created and registered successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    navigate('/login');
                });
            }
        } catch (err: any) {
            setError('Failed to create credential: ' + err.message);
        }
    };

    return (
        <form className="auth-form" onSubmit={handleSubmit}>
            <div className="auth-form-group">
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </div>
            <button type="submit">Create Credential</button>
            {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
        </form>
    );
};

export default CredentialForm;