import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from '../app/App';
import Signup from '../auth/Signup';
import Signin from '../auth/Signin';
import Cars from '../cars/CarFilterBar';


const Routes = () => {
    return(
        <BrowserRouter>
             <Switch>
                 <Route path='/' exact component={App}/>
                 <Route path='/signup'  exact component={Signup}/>
                 <Route path='/signin'  exact component={Signin}/>
                 <Route path='/cars' exact component={Cars}/>
             </Switch>
        </BrowserRouter>
    )
}
export default Routes;

