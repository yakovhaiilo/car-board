import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../app/App';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Signout from '../auth/Signout';
import Cars from '../cars/CarForm';


const Routes = () => {
    return(
        <BrowserRouter>
             <Switch>
                 <Route path='/' exact component={App}/>
                 <Route path='/signup'  exact component={Signup}/>
                 <Route path='/signin'  exact component={Signin}/>
                 <Route path='/signout' exact component={Signout}/>
                 <Route path='/cars' exact component={Cars}/>
             </Switch>
        </BrowserRouter>
    )
}
export default Routes;



// import React, { Component } from 'react';
// import { Route, Redirect } from 'react-router-dom';
// import { isAuth } from './helpers';

// const PrivateRoute = ({ component: Component, ...rest }) => (
//     <Route
//         {...rest}
//         render={props =>
//             isAuth() ? (
//                 <Component {...props} />
//             ) : (
//                 <Redirect
//                     to={{
//                         pathname: '/signin',
//                         state: { from: props.location }
//                     }}
//                 />
//             )
//         }
//     ></Route>
// );
