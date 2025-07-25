import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
import './pages/Global.css';

const App: React.FC = () => {
  return (
    <div className="form-wrapper">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Register />} />
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

// import React, { useMemo } from 'react';
// import { BrowserRouter as Router, useLocation, useNavigate } from 'react-router-dom';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import FlipCard from './pages/FlipCard';

// const FlipRoutes: React.FC = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const flipped = useMemo(() => location.pathname === '/register', [location.pathname]);

//   return (
//     <FlipCard
//       flipped={flipped}
//       front={<Login onFlip={() => navigate('/register')} />}
//       back={<Register onFlip={() => navigate('/login')} />}
//     />
//   );
// };

// const App: React.FC = () => (
//   <Router>
//     <FlipRoutes />
//   </Router>
// );

// export default App;