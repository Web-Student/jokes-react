import { AuthorCount } from "../DataTransfer/AuthorCount";

interface Props {
    person: AuthorCount;
}

export const AuthorDisplay: React.FC<Props> = ({person}) => {
    //const deleteMutation = useDeleteJoke();

    //Idea: 
    return (
        <div className = "card">
            <div className="card-body">
                {/* <button onClick = {() => { handleDelete(deleteMutation, joke.id)}}>
                    <TrashCanIcon />
                </button> */}
                <p className="card-title">{person.author == "" ? "Anonymous": person.author}</p>
                <p className="card-text">author of {person.count} jokes</p>
                {/*idea: They could click a star to mark an author as their favorite, and have a "favorite authors" page */}
            </div>
            {/* <Toaster richColors position="bottom-center" /> */}
        </div>
    )
}
