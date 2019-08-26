import React from 'react';
import {BrowserRouter, Route } from 'react-router-dom';
import CreateEvent from './konfhub/CreateEvent';
import DashBoard from './konfhub/DashBoard';
import App from './App';

const SetRoute = (props) => {
    return(
        <BrowserRouter>
            <Route path="/" exact component={App} />
            <Route path="/create" render={props => <CreateEvent {...props} />}  />
            <Route path="/dashboard" render={props => <DashBoard {...props} />}  />
        </BrowserRouter>
    )
};

export default SetRoute;