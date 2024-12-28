import "./Nav.css"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/People">People</Link>
        </li>
        <li>
          <Link to="/Projects">Projects</Link>
        </li>
      </ul>
    </nav>
  )
}
