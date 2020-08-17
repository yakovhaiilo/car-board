import React from "react";
import {BrowserRouter,Switch,Route} from "react-router-dom";
import CarSearchBoard from './CarSearchBoard/CarSearchBoard';
import Home from './Home';
import Login from './Login';
import Register from './Register';



function App () {
  return(<div className = 'App'>    
             <BrowserRouter>
              <Switch>
                <Route exact path = {"/"} component = {Home} />
                <Route exact path = {"/cars"} component = {CarSearchBoard} />   
                <Route exact path = {"/login"} component = {Login} />   
                <Route exact path = {"/register"} component = {Register} />   
              </Switch>
             </BrowserRouter>
        </div>
  ) 
}

export default App;

