import React, { Fragment } from "react";
import {Link} from 'react-router-dom';



const Layout = ({ children }) => {
    const nav = () => (
        <ul className ="nav nav-tabs bg-primary">
            <li className="nav-item">
                <Link to='/' className="text-light nav-link">
                    Home
                </Link>
            </li>
            {!localStorage.length ? 
             <Fragment>
               <li className ="nav-item">
                <Link to='/signup' className="text-light nav-link">
                    Signup
                </Link>
            </li>
            <li className ="nav-item">
                <Link to='/signin' className="text-light nav-link">
                    Signin
                </Link>
            </li> 
            </Fragment> 
            : 
            <Fragment>
            <li className ="nav-item">
                <Link to='/signout' className="text-light nav-link">
                    signout
                </Link>
            </li> 
            </Fragment>   
            }
           
        </ul>
    );
  return (
    <Fragment>
       {nav()}
      <div className="container">{children}</div>
    </Fragment>
  );
};
export default Layout;
