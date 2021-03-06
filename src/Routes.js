import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import RouteHandler from './components/RouteHandler';

import Home from './pages/Home';
import Leitura from './pages/Leitura';
import Admin from './pages/Admin';
import NotFound from './pages/NotFound';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AddConteudo from './pages/AddConteudo';
import CadTemas from './pages/CadTemas';
import CadAutor from './pages/CadAutor';
import Listagem from './pages/Listagem';

export default () => {
    return (
        <Switch>
            <RouteHandler exact path="/">
                <Home />
            </RouteHandler>
            <RouteHandler exact path="/ad/:id">
                <Leitura />
            </RouteHandler>
            <RouteHandler private exact path="/admin">
                <Admin />
            </RouteHandler>
            <RouteHandler exact path="/signin">
                <SignIn />
            </RouteHandler>
            <RouteHandler exact path="/signup">
                <SignUp />
            </RouteHandler>
            <RouteHandler private exact path="/addconteudo">
                <AddConteudo />
            </RouteHandler>
            <RouteHandler private exact path="/cadtemas">
                <CadTemas />
            </RouteHandler>
            <RouteHandler private exact path="/cadautor">
                <CadAutor />
            </RouteHandler>
            <RouteHandler exact path="/listagem">
                <Listagem />
            </RouteHandler>
            <RouteHandler>
                <NotFound />
            </RouteHandler>
        </Switch>
    );
}