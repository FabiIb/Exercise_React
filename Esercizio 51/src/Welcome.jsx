import {Link, Outlet} from 'react-router-dom'
function Welcome() {
    return(
        <>
        <Link to=":username">Click Name</Link>
        <Outlet />
        </>
    )
}
export default Welcome