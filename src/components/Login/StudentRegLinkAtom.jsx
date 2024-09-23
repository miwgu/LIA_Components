const StudentRegLinkAtom = ({navigation, title="Register as Student" }) =>{

    if (!title && !navigation){
        return (
            <div>You need add a title and nav function for this link</div>
        )

    }
    const linkToRegisterStudent= (e) =>{
        e.preventDefault();
        navigation('registerStudent')
    } 

    return (
        <a 
        href="#"
        onClick={linkToRegisterStudent}
        >
            {title}
        </a>

    )
}

export default StudentRegLinkAtom