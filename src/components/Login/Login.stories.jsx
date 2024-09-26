import Login from "./Login.jsx";
import {MockLoginProvider} from "./MockLoginProvider.jsx";
import React from "react";

export default {
    title: 'LIA/Login/Login',
    component: Login,
}


export const Default =()=>(
 <MockLoginProvider>
    <Login/>
 </MockLoginProvider>
)