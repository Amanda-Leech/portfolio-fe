import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.scss';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './component/AuthProvider';

ReactDOM.render(
    <Router>
        <AuthProvider>
            <App />
        </AuthProvider>
    </Router>,
    document.getElementById('root')
);
