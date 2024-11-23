interface Props {
    author: [string, number];
}

export const AuthorDisplay: React.FC<Props> = ({author}) => {
    //const deleteMutation = useDeleteJoke();

    //Idea: 
    return (
        <div className = "card">
            <div className="card-body">
                {/* <button onClick = {() => { handleDelete(deleteMutation, joke.id)}}>
                    <TrashCanIcon />
                </button> */}
                <p className="card-title">{author[0]}</p>  //author email
                <p className="card-text">author of {author[1]} jokes</p>
                {/*idea: They could click a star to mark an author as their favorite, and have a "favorite authors" page */}
            </div>
            {/* <Toaster richColors position="bottom-center" /> */}
        </div>
    )
}
