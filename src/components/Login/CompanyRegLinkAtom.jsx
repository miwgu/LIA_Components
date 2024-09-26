import React from "react";
const CompanyRegLinkAtom = ({navigation,title="Register as Company"}) =>{

    if(!title && link){
        return (
            <div>You need add title and link for this link</div>

        )   
    }
    const linkToRegisterCompany =(e) =>{
    e.preventDefault();
    navigation('registerCompany')
    }

    return (
        <a 
        href="#"
        onClick={linkToRegisterCompany}
        >
          {title}
        </a>
    )
}

export default CompanyRegLinkAtom