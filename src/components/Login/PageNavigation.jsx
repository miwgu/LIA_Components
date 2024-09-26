import {useState} from "react";
import React from "react";

export const PageNavigation = () =>{
    const [currentPage, setCurrentPage] = useState('home');

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
          case 'login':
            window.history.pushState(null,'','/login');
            break;
         case 'home':
            default:
            window.history.pushState(null, '', '/');
        }
    };
        

    return { currentPage, navToPage };
}