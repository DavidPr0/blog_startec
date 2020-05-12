import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Leitura from './pages/Leitura';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default () => {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>
            <Route exact path="/ad/:id">
                <Leitura />
            </Route>
            <Route exact path="/admin">
                <Admin />
            </Route>
            <Route exact path="/signin">
                <SignIn />
            </Route>
            <Route exact path="/signup">
                <SignUp />
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}