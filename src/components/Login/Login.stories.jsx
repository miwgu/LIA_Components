import Login from "./Login.jsx";
import {MockLoginProvider} from "./MockLoginProvider.jsx";


export default {
    title: 'LIA/Login/Login',
    component: Login,
}


export const Default =()=>(
 <MockLoginProvider>
    <Login/>
 </MockLoginProvider>
)