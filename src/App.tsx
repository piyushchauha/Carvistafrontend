import React from "react";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { BrowserRouter, Routes,Route } from "react-router";
import DashBoard from "./Pages/Dashboard";
import ForgotPassword from "./Pages/Forgetpassword";
import ResetPassword from "./Pages/Resetpassword";
import Sell from "./Pages/Sell";
// import Example from "./Pages/Header";


function App() {
  return (
   <Sell/>
    // <BrowserRouter>
    // <Routes>
    // <Route path="/" index element={<DashBoard/>}/>
    //   <Route path="/signup" element={<Signup/>}/>
    //   <Route path="/signin" element={<Signin/>}/>
    //   <Route path="/forgetpassword" element={<ForgotPassword/>}/>
    //   <Route path="/resetpassword" element={<ResetPassword/>}/>
    //   <Route path="/sellCar" element={ <Sell/>}/>

    // </Routes>
    // </BrowserRouter>
   
  );
}

export default App;
