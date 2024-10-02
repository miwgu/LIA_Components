import React, {createContext, useContext, useState, useEffect} from "react";
import CompanyPage from "../CompanyPage/CompanyPage";
import StudentPage from "../StudentPage/StudentPage";
import RegisterStudent from "../RegisterStudent/RegisterStudent";
import RegisterCompany from "../RegisterCompany/RegisterCompany";
import Login from "../Login/Login";
import Home  from "../HomeTest/Home";
//import { PageNavigation } from "./PageNavigation";

const MockLoginContext = createContext();

export const MockLoginProvider = ({children}) =>{
    //const [userId, setUserId] = useState(null);
    const [user, setUser] = useState(null);
    const [loggedIn, setLoggedIn] = useState(false);
    //const [currentPage, setCurrentPage] = useState("home");//login
    //const {currentPage, navToPage} = PageNavigation();

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
  //const currentPath = window.location.pathname;

/*    if(currentPath) {
      navToPage(currentPath);
  } 
  */
  if(loggedInUser){
   setUser(loggedInUser)
   setLoggedIn(true)
  }
/*    if(loggedInUser.role=== 'student'){
     navToPage('companyPage')
   } else{
    navToPage('studentPage')
   }
   } else {
    navToPage('login')
   } */
  }, [])

  const users = [
    {email: 'student1@example.com', password:'stu%1', role:'student'},
    {email: 'com1@example.com', password:'com%1', role:'company'}
  ]

  const mockLoginFunc = (email, password, navToPage) =>{
 
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
            console.log("Navigate to /company-page")
            navToPage('companyPage')
             
        } else {
            console.log("Navigate to /student-page")
            navToPage('studentPage')
        } 
        // Force refresh to ensure correct page load
        window.location.reload();
    } else {
        console.error('Mock login failed: Invalid username or password');
    }
  }

   const value = {
    user,
    setUser,
    loggedIn,
    setLoggedIn,
    mockLoginFunc,
    }; 

/*    const navToPage = (page) =>{
    setCurrentPage(page)

    switch(page){
      case 'companyPage':
        window.history.pushState(null,'','/companyPage');
        break;
      case 'studentPage':
        window.history.pushState(null,'','/studentPage');
        break;
      case 'registerStudent':
        window.history.pushState(null,'', '/registerStudent');
        break;
      case 'registerCompany':
        window.history.pushState(null,'','/registerCompany');
        break;

       case 'login':
        window.history.pushState(null,'','/login');
        break;
      case 'home':
        default:
        window.history.pushState(null, '', '/');
    } 
  } 
 */
  
/*   if(currentPage === 'companyPage')
    return <CompanyPage/>

  if(currentPage === 'studentPage')
    return  <StudentPage/>

  if(currentPage === 'registerStudent')
    return <RegisterStudent/>

  if(currentPage === 'registerCompany')
    return <RegisterCompany/>
 
   if (currentPage === 'login') 
    return <Login loginFunction={mockLoginFunc} navToPage={navToPage} />;
  
  if (currentPage === 'home') 
    return <Home/> 
 */
return (
    <MockLoginContext.Provider value={value} >
      {children}
    </MockLoginContext.Provider>

  )
};

export const useMockLogin = () => {
    return useContext(MockLoginContext);
};
