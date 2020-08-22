import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../components/App';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';
import Signout from '../components/auth/Signout';
import Cars from '../components/CarForm/CarForm';


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
