// import { useRouteMatch, Link } from "react-router-dom"
import { Link } from "react-router-dom"

function Users() {
    // let match = useRouteMatch()
    return (
        <>
            <h1>Users</h1>
            <ul>
                {/* <li><a href={`${match.url}/ivanov`}>Ivanov</a></li> */}
                <li><Link to="ivanov">Ivanov</Link></li>
                <li><Link to="petrov">Petrov</Link></li>
                {/* <li><a href="/users/ivanov">Ivanov</a></li>
                <li><a href="/users/petrov">Petrov</a></li> */}
            </ul>
        </>
    )
}

export default Users