import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';

import App from './app.routes';
import Auth from './app.auth';

const Routes: React.FC = () => {

    const { logged } = useAuth();

    return(
        <BrowserRouter>
            { logged ? <App/> : <Auth /> }
        </BrowserRouter>
    );
};

export default Routes;