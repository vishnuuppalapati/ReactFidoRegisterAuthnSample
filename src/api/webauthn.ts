export const makeCredentialOptions = async (username: string) => {
    try {
        const makeCredentialOptionsResponse = await fetch('https://localhost:44349/api/fidoClient/makecredentialrequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username }),
        });
        const data = await makeCredentialOptionsResponse.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const makeCredentials = async (requestData: any) => {
    try {
        const finishResponse = await fetch('https://localhost:44349/api/fidoClient/makecredentialresponse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData),
        });
        return finishResponse;
    } catch (error) {
        return error;
    }
};

export const getAssertionOptions = async (username: string) => {
    try {
        const makeCredentialOptionsResponse = await fetch('https://localhost:44349/api/fidoClient/getassertionrequest', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username }),
        });
        const data = await makeCredentialOptionsResponse.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const getAssertion = async (requestData: any) => {
    try {
        const makeCredentialOptionsResponse = await fetch('https://localhost:44349/api/fidoClient/getassertionresponse', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData),
        });
        const data = await makeCredentialOptionsResponse.json();
        return data;
    } catch (error) {
        return error;
    }
};

export const base64url_to_base64 = (input: string) => {
    // Replace non-url compatible chars with base64 standard chars
    input = input
        .replace(/-/g, '+')
        .replace(/_/g, '/');

    // Pad out with standard base64 required padding characters
    var pad = input.length % 4;
    if (pad) {
        if (pad === 1)
            throw new Error('InvalidLengthError: Input base64url string is the wrong length to determine padding');
        input += new Array(5 - pad).join('=');
    }

    return input;
}

export const buffer_to_base64url = (buffer: ArrayBuffer) => {
    var str = btoa(String.fromCharCode.apply(null, Array.from(new Uint8Array(buffer))));
    return str.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
}