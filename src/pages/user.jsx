import React, { Fragment } from 'react';
import {BrowserRouter, Route, Link, Switch} from 'react-router-dom';
// import UserDetail from './pages/UserDetail';
// import UserNew from './pages/UserNew';
import axios from 'axios';

function User() {

    axios.get('http://localhost:4000/message', {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })

    return(
        <Fragment>
            <Switch>
                <Route exact path="/user">
                    User    
                </Route>
                <Route path="/user/new">
                    {/* <UserNew /> */}
                </Route>
                <Route path="/user/:id">
                    {/* <UserDetail /> */}
                </Route>
            </Switch>
        </Fragment>
    )
}

export default User