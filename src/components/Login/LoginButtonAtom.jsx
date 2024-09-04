const LoginButtonAtom = ({title="Sign In"}) =>{

    if(!title){
        return(
            <div>You need to Add title for this button</div>
        )
    }
    return(
        <button>{title}</button>
    )
}

export default LoginButtonAtom