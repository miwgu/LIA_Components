import React, {createContext, useContext, useState, useEffect} from "react";
import CompanyList from "../CompanyList/CompanyList";
import StudentList from "../StudentList/StudentList";
import RegisterStudent from "../RegisterStudent/RegisterStudent";
import RegisterCompany from "../RegisterCompany/RegisterCompany";

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
     //setCurrentPage('companyList')
     //window.history.pushState(null, '', '/companyList'); // Update URL
     navToPage('companyList')
   } else{
    //setCurrentPage('studentList')
    //window.history.pushState(null, '', '/studentList'); // Update URL
    navToPage('studentList')
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
            //setCurrentPage('companyList')
            navToPage('companyList')
             
        } else {
            //navigate ('/student-list')
            console.log("Navigate to /student-list")
            //setCurrentPage('studentList')
            navToPage('studentList')
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

  const navToPage = (page) =>{
    setCurrentPage(page)

    switch(page){
      case 'companyList':
        window.history.pushState(null,'','/companyList');
        break;
      case 'studentList':
        window.history.pushState(null,'','/studentList');
        break;
      case 'registerStudent':
        window.history.pushState(null,'', '/registerStudent');
        break;
      case 'registerCompany':
        window.history.pushState(null,'','/registerCompany');
        break;
      default:
        window.history.pushState(null,'','/login');
    }
  }

  
  if(currentPage === 'companyList'){
    return <CompanyList/>
  }

  if(currentPage === 'studentList'){
    return  <StudentList/>
  }

  if(currentPage === 'registerStudent')
  {
    return <RegisterStudent/>
  }

  if(currentPage === 'registerCompany')
  {
    return <RegisterCompany/>
  }

return (
    <MockLoginContext.Provider value={{ value, loginFunction: mockLoginFunc, navToPage}} >
      {children}
    </MockLoginContext.Provider>

  )
};

export const useMockLogin = () => {
    return useContext(MockLoginContext);
};
