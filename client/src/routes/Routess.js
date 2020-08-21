import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../components/App';
import Signup from '../components/auth/Signup';
import Signin from '../components/auth/Signin';


const Routes = () => {
    return(
        <BrowserRouter>
             <Switch>
                 <Route path='/' exact component={App}/>
                 <Route path='/signup' exact component={Signup}/>
                 <Route path='/signin' exact component={Signin}/>
             </Switch>
        </BrowserRouter>
    )
}
export default Routes;
