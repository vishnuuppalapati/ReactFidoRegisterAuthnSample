import React from 'react';
import App from './App';
import ReactDOM from 'react-dom'; // <-- Change here

// const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);