export interface MakeCredentialOptions {
    publicKey: {
        challenge: Uint8Array;
        rp: {
            name: string;
        };
        user: {
            id: Uint8Array;
            name: string;
            displayName: string;
        };
        pubKeyCredParams: Array<{
            type: string;
            alg: number;
        }>;
        timeout?: number;
        excludeCredentials?: Array<{
            id: Uint8Array;
            type: string;
        }>;
        authenticatorSelection?: {
            authenticatorAttachment?: string;
            requireResidentKey?: boolean;
            userVerification?: string;
        };
        attestation?: string;
    };
}

export interface MakeCredentialResponse {
    id: string;
    rawId: Uint8Array;
    response: {
        attestationObject: ArrayBuffer;
        clientDataJSON: ArrayBuffer;
    };
    type: string;
}

export interface GetAssertionOptions {
    publicKey: {
        challenge: Uint8Array;
        allowCredentials?: Array<{
            id: Uint8Array;
            type: string;
        }>;
        timeout?: number;
        userVerification?: string;
    };
}

export interface GetAssertionResponse {
    id: string;
    rawId: Uint8Array;
    response: {
        authenticatorData: ArrayBuffer;
        clientDataJSON: ArrayBuffer;
        signature: ArrayBuffer;
        userHandle?: Uint8Array;
    };
    type: string;
}