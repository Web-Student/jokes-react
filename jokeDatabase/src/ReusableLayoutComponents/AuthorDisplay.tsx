import { Link } from "react-router";
import { AuthorCount } from "../DataTransfer/AuthorCount";

interface Props {
    person: AuthorCount;
}

export const AuthorDisplay: React.FC<Props> = ({person}) => {
    return (
        <div className = "card">
            <div className="card-body">
                <Link to = {`/jokesbyauthor/${person.author}`} className="btn btn-secondary">
                    All jokes
                </Link>
                <p className="card-title">{person.author == "" ? "Anonymous": person.author}</p>
                <p className="card-text">author of {person.count} jokes</p>
                {/*idea: They could click a star to mark an author as their favorite, and have a "favorite authors" page */}
            </div>
        </div>
    )
}
