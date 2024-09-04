const CompanyRegLinkAtom = ({title="Register as Company"}) =>{

    if(!title){
        return (
            <div>You need add title for this link</div>

        )   
    }
    return (
        <a href="#">{title}</a>
    )
}

export default CompanyRegLinkAtom