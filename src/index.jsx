import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
 import * as bootstrap from 'bootstrap' 

import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>
);
