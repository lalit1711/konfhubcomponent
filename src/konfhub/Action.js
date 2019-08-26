import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Ticket from './Ticket';

function Action(){
    return (
        <BrowserRouter>
            <Route path="/dashboard/" exact component={Ticket} />
        </BrowserRouter>
    )
}

export default Action;