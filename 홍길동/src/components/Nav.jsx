import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav>
            <Link to="/">홈</Link>
            <Link to="/sub">서브</Link>
        </nav>
    )
}

export default Nav
