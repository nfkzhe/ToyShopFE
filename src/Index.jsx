// src/index.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '~/App';
import GlobalStyles from '~/components/GlobalStyles';
import { CartProvider } from './contexts/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <GlobalStyles>
            <CartProvider>
                <App />
            </CartProvider>
        </GlobalStyles>
    </React.StrictMode>,
);
