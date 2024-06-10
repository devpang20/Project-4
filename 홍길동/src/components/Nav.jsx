import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="font-bold underline">
            <Link to="/">홈</Link>
            <Link to="/recode/list">기록목록</Link>
        </nav>
    )
}

export default Nav
