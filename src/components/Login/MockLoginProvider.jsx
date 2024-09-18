import { navigate } from "@storybook/addon-links";
import React, {createContext, useContext, useState} from "react";

const MockLoginContext = createContext();

export const MockLoginProvider = ({children}) =>{
    const [userId, setUserId] = useState(null);

/* const mockLoginFunc =(email, password) => {
    if(email === 'student1@example.com' && password === 'stu%1'){
        const mockUserId = 'mock-student-1';
        setUserId(mockUserId);
        console.log('Mock login successful, User ID:', mockUserId );     
    } else {
        console.error('Mock login failed: Invalid username or password');
    }
};     */

  const users = [
    {email: 'student1@example.com', password:'stu%1', role:'student'},
    {email: 'com1@example.com', password:'com%1', role:'company'}
  ]

  const mockLoginFunc = (email, password) =>{
 
    const user = users.find(u=> u.email === email && u.password === password )
    if (user){
        const mockUserId = 'mock-student-1';
        setUserId(mockUserId);
        console.log('Mock login successful, User ID:', mockUserId );   

        if (user.role === "student"){
            console.log("Navigate to /company-list")
            //navigate ('/company-list')
        } else {
            //navigate ('/student-list')
            console.log("Navigate to /student-list")
        }
    } else {
        console.error('Mock login failed: Invalid username or password');
    }
  }

return (
    <MockLoginContext.Provider value={{ userId, loginFunction: mockLoginFunc }} >
      {children}
    </MockLoginContext.Provider>

  )
};

export const useMockLogin = () => {
    return useContext(MockLoginContext);
};
