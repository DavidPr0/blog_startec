import React  from 'react';
import { Route, Redirect, Switch, BrowserRouter } from 'react-router-dom';
import { isLogged } from '../helpers/AuthHandler';

export default ({ children, ...rest }) => {
    let logged = isLogged();
    let autorizado = (rest.private && !logged) ? false : true;
    return (
        <Route 
            {...rest}
            render={ () => 
                autorizado ? children : <Redirect to="/signin" />}
        />
    );
}