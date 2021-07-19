import React from 'react';
import { Switch, Route, BrowserRouter as Router, } from 'react-router-dom';
import { PATHS } from '../constants';
import { Main, RepositoriesDetails, Saved } from '../pages';
import { ScrollToTop } from '.';
import { Header } from '../components';

export const Routing = () => {
    const { main, repodetail, saved } = PATHS;

    const routes = [
        { path: main, Component: Main, },
        { path: `${repodetail}/:owner/:repo`, Component: RepositoriesDetails },
        { path: saved, Component: Saved },
    ]

    return (
        <Router>
            <ScrollToTop />
            <Header />
            <Switch>
                {
                    routes.map(({ path, Component }, index) => (
                        <Route key={index} exact path={path} component={Component} />
                    ))
                }
            </Switch>
        </Router>
    );
};
