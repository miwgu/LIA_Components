const StudentRegLinkAtom = ({link= "#", title="Register as Student" }) =>{

    if (!title && link){
        return (
            <div>You need add title and link for this link</div>
        )

    }
    return (
        <a href={link}>{title}</a>

    )
}

export default StudentRegLinkAtom