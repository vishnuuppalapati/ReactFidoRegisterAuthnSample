import React from 'react';
import { Link } from 'react-router-dom';
import './Global.css';
import CredentialForm from '../components/CredentialForm';

const Register: React.FC = () => (
  <div className="form-card-container">
    <h2 className="form-card-title">Register</h2>
    <CredentialForm />
    <p>
      Already have an account? <Link to="/login" className="form-card-link">Login</Link>
    </p>
  </div>
);

export default Register;

// const Register: React.FC<{ onFlip: () => void }> = ({ onFlip }) => (
//   <div className="form-card-container">
//     <h2 className="form-card-title">Register</h2>
//     <CredentialForm />
//     <p>
//       Already have an account?{' '}
//       <span className="form-card-link" onClick={onFlip} style={{cursor: 'pointer'}}>Login</span>
//     </p>
//   </div>
// );

// export default Register;