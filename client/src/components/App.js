import React from 'react';
import Layout from '../core/Layout';

const App = () => {
   return (
     <Layout>
        <h1> hello React </h1>
     </Layout>
   )
}
export default App;





























// import React, { useEffect, useState } from "react";
// import { BrowserRouter, Switch, Route } from "react-router-dom";
// import NavBar from "./NavBar/NavBar";
// import CarForm from "./CarForm/CarForm";
// import Login from "./SignupForms/Login";
// import Register from "./SignupForms/Register";
// import Home from "./Home/Home";
// import { Redirect } from "react-router";
// import axios from "axios";

// function App() {
//   const [token, setToken] = useState(null);

//   useEffect(() => {
//     authLogin();
//   }, []);

//   const authLogin = () => {
//     const token = localStorage.getItem("token");
//     if (token) {
//       setToken(token);
//       return <Redirect to="/cars" />;
//     }
//   };
//   // 
//   const login = (user) => {
//     axios.post("/api/user/login", user).then((res) => {
//       if (res.status === 201) {
//         localStorage.setItem("token", JSON.stringify(res.data));
//         setToken(res.data);
//       }
//     });
//   };

//   let routes = (
//     <Switch>
//       <Route exact path={"/"} component={Home} />
//       <Route
//         exact
//         path={"/login"}
//         render={(props) => <Login {...props} login = {login} token={token} />}
//       />
//       <Route
//         exact
//         path={"/register"}
//         render={(props) => <Register {...props} token={token} />}
//       />
//     </Switch>
//   );

//   if (token !== null) {
//     console.log("ggg");
//     routes = (
//       <Switch>
//         <Route exact path={"/cars"} component={CarForm} />
//         <Route
//           exact
//           path={"/login"}
//           render={(props) => <Login {...props} login={login} token={token} />}
//         />
//         <Route
//           exact
//           path={"/register"}
//           render={(props) => <Register {...props} token={token} />}
//         />
//       </Switch>
//     );
//   }

//   return (
//     <div className="App">
//       <BrowserRouter>
//         <NavBar />
//         {routes}
//       </BrowserRouter>
//     </div>
//   );
// }

// export default App;
