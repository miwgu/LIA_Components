const CompanyRegLinkAtom = ({link= "#",title="Register as Company"}) =>{

    if(!title && link){
        return (
            <div>You need add title and link for this link</div>

        )   
    }
    return (
        <a href={link}>{title}</a>
    )
}

export default CompanyRegLinkAtom