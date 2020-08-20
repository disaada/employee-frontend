import React, { Fragment } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
import UserAll from './UserAll';
import UserNew from './UserNew';
import UserDetail from './UserDetail';
import axios from 'axios';

function User() {
    return(
        <Fragment>
            <Switch>
                <Route exact path="/user">
                    <UserAll />    
                </Route>
                <Route path="/user/new">
                    <UserNew />
                </Route>
                <Route path="/user/:id">
                    <UserDetail />
                </Route>
            </Switch>
        </Fragment>
    )
}

export default User