const StudentRegLinkAtom = ({title="Register as Student" }) =>{

    if (!title){
        return (
            <div>You need add title for this link</div>
        )

    }
    return (
        <a href="#">{title}</a>

    )
}

export default StudentRegLinkAtom