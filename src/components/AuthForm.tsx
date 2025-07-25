import React, { useState } from 'react';
import { getAssertionOptions, getAssertion, base64url_to_base64, buffer_to_base64url } from '../api/webauthn';
import './Form.css';
import Swal from 'sweetalert2';

const AuthForm: React.FC = () => {
    const [username, setUsername] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setError('');
        try {
            const optionsResp = await getAssertionOptions(username) as any;
            const options = optionsResp.credential_assertion.publicKey;
            const assertionResponse = await navigator.credentials.get({
                publicKey: {
                    ...options,
                    challenge: Uint8Array.from(
                        atob(base64url_to_base64(options.challenge)),
                        c => c.charCodeAt(0)
                    ),
                    allowCredentials: options.allowCredentials.map((cred: any) => ({
                        ...cred,
                        id: Uint8Array.from(
                            atob(base64url_to_base64(cred.id)),
                            c => c.charCodeAt(0)
                        ),
                    })),
                },
            });
            const assertion = assertionResponse as any;
            if (!assertion) {
                Swal.fire({
                    title: 'Error!',
                    text: 'Credential creation was cancelled or failed..',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            }

            const fidoAuthenticationRequest = {
                username: username,
                session_id: optionsResp.session_id,
                credential_assertion_response: {
                    authenticatorAttachment: assertion.authenticatorAttachment,
                    id: assertion.id,
                    type: assertion.type,
                    rawId: buffer_to_base64url(assertion.rawId),
                    response: {
                        authenticatorData: buffer_to_base64url(assertion.response.authenticatorData),
                        clientDataJSON: buffer_to_base64url(assertion.response.clientDataJSON),
                        signature: buffer_to_base64url(assertion.response.signature),
                        userHandle: buffer_to_base64url(assertion.response.userHandle),
                    },
                },
            }
            const finishAuthenticationResponse = await getAssertion(fidoAuthenticationRequest) as any;
            if (!finishAuthenticationResponse.status) {
                Swal.fire({
                    title: 'Error!',
                    text: finishAuthenticationResponse.message,
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
                return;
            }
            else {
                setError('');
                Swal.fire({
                    title: 'Success!',
                    text: finishAuthenticationResponse.message,
                    icon: 'success',
                    confirmButtonText: 'OK',
                }).then(() => {
                    // navigate('/login');
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
            <button type="submit">Authenticate</button>

            {error && <p style={{ color: 'red', marginTop: 10 }}>{error}</p>}
        </form>
    );
};

export default AuthForm;