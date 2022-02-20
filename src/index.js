import React from 'react';
import ReactDOM from 'react-dom';
import { Helmet } from 'react-helmet';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './basico.css';

import App from './App';
import Creditos from './Creditos/Creditos';
import NaoEncontrado from './Comum/NaoEncontrado';

ReactDOM.render(
    <>
        <Helmet htmlAttributes={{ lang : 'pt-br' }}>
            <title>CardMiro</title>
        </Helmet>

        <Router>
            <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow z-11">
                <h5 className="my-0 mr-md-auto pe-3 font-weight-normal cursor-default">Cardmiro</h5>
                <nav className="my-2 my-md-0 mr-md-3">
                    <Link
                        className="p-2 text-dark"
                        to="/">Jogar</Link>
                    <Link
                        className="p-2 text-dark"
                        to="/creditos">Créditos</Link>
                </nav>
            </div>

            <Routes>
                <Route
                    exact
                    path="/"
                    element={<App className="z-1"/>} />
                <Route
                    path="/creditos"
                    element={<Creditos />} />
                <Route
                    path="*"
                    element={<NaoEncontrado />} />
            </Routes>
        </Router>

        
    </>,
    document.getElementById('root')
);