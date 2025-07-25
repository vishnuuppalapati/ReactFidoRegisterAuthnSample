import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from '../components/AuthForm';
import './Global.css';

const Login: React.FC = () => (
  <div className="form-card-container">
    <h2 className="form-card-title">Login</h2>
    <AuthForm />
    <p>
      Don't have an account?{' '}
      <Link to="/register" className="form-card-link">Register</Link>
    </p>
  </div>
);

export default Login;

// const Login: React.FC<{ onFlip: () => void }> = ({ onFlip }) => (
//   <div className="form-card-container">
//     <h2 className="form-card-title">Login</h2>
//     <AuthForm />
//     <p>
//       Don't have an account?{' '}
//       <span className="form-card-link" onClick={onFlip} style={{cursor: 'pointer'}}>Register</span>
//     </p>
//   </div>
// );

// export default Login;