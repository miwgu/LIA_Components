import React, {createContext, useContext, useState, useEffect} from "react";
import CompanyList from "../CompanyList/CompanyList";

const MockLoginContext = createContext();

export const MockLoginProvider = ({children}) =>{
    //const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    const [currentPage, setCurrentPage] = useState("login");

/* const mockLoginFunc =(email, password) => {
    if(email === 'student1@example.com' && password === 'stu%1'){
        const mockUserId = 'mock-student-1';
        setUserId(mockUserId);
        console.log('Mock login successful, User ID:', mockUserId );     
    } else {
        console.error('Mock login failed: Invalid username or password');
    }
};     */

 useEffect (()=>{
  const loggedInUser = JSON.parse(localStorage.getItem('loggedInUserData'));
   if(loggedInUser){
   setUser(loggedInUser)
   setLoggedIn(true)

   if(loggedInUser.role=== 'student'){
     setCurrentPage('companyList')
   } else{
    setCurrentPage('studentList')

   }
   } 
  }, [])

  const users = [
    {email: 'student1@example.com', password:'stu%1', role:'student'},
    {email: 'com1@example.com', password:'com%1', role:'company'}
  ]

  const mockLoginFunc = (email, password) =>{
 
    const user = users.find(u=> u.email === email && u.password === password )
    console.log("user:", JSON.stringify(user))
    if (user){
        setUser(user);
        setLoggedIn(true);
        localStorage.setItem('loggedInUserData', JSON.stringify(user));
        //const mockUserId = 'mock-student-1';
        //setUserId(mockUserId);
        console.log('Mock login successful!');   
        
        if (user.role === "student"){
            console.log("Navigate to /company-list")
            setCurrentPage('companyList') 
        } else {
            //navigate ('/student-list')
            console.log("Navigate to /student-list")
            setCurrentPage('studentList')
        }
    } else {
        console.error('Mock login failed: Invalid username or password');
    }
  }

  const value = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
  };
  
  if(currentPage === 'companyList'){
    return <CompanyList/>
  }

  if(currentPage === 'studentList'){
    return<div>Navigate to StudentList</div>
  }

return (
    <MockLoginContext.Provider value={{ value, loginFunction: mockLoginFunc }} >
      {children}
    </MockLoginContext.Provider>

  )
};

export const useMockLogin = () => {
    return useContext(MockLoginContext);
};
