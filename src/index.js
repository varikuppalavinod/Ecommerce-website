import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import {AuthContextProvider} from "./Components/store/Authcontext"


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <AuthContextProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </AuthContextProvider>
);

