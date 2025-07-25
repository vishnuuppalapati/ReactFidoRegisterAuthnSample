# Web Authentication React App

This project is a React.js web application that implements Web Authentication using the Web Authentication API. It provides a user-friendly interface for users to create and manage their credentials securely.

## Project Structure

```
web-auth-react-app
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── api
│   │   └── webauthn.ts    # Functions implementing the Web Authentication API
│   ├── components
│   │   ├── AuthForm.tsx    # Component for user authentication
│   │   └── CredentialForm.tsx # Component for creating new credentials
│   ├── pages
│   │   └── Home.tsx        # Main page rendering AuthForm and CredentialForm
│   ├── App.tsx             # Main application component
│   ├── index.tsx           # Entry point for the React application
│   └── types
│       └── index.ts        # TypeScript types and interfaces
├── package.json             # npm configuration file
├── tsconfig.json            # TypeScript configuration file
└── README.md                # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd web-auth-react-app
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Usage

- Use the **AuthForm** component to input your credentials and initiate the authentication process.
- Use the **CredentialForm** component to create new credentials and register them with the Web Authentication API.

## Web Authentication API

This application utilizes the following Web Authentication API functions:

- `makeCredentialOptions`: Generates options for creating new credentials.
- `makeCredentials`: Handles the process of creating new credentials.
- `getAssertionOptions`: Generates options for asserting existing credentials.
- `getAssertion`: Handles the process of asserting existing credentials.

## Contributing

Feel free to submit issues or pull requests for improvements or bug fixes. 

## License

This project is licensed under the MIT License.