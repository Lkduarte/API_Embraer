import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import CriarAeronaves from './views/Criar-Aeronaves2';
import reportWebVitals from './reportWebVitals';
import PaginaInicial from './views/pagina-inicial';
import Calculo from './views/formulario-calculo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <App />
=======
    <CriarAeronaves />
>>>>>>> 237bdef0d7f318efb7b556533012fde66b9cdeb3
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
