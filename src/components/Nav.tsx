import "./Nav.css"
import { Link, NavLink } from "react-router-dom"

export default function Nav() {
  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link to="/#home">HOME</Link>
        </li>
        <li>
          <Link to="/#about">ABOUT US</Link>
        </li>
        <li>
          <Link to="/#what-we-do">WHAT WE DO</Link>
        </li>
        <li>
          <NavLink to="/#projects">PROJECTS</NavLink>
        </li>
        <li>
          <Link to="/#contacts">CONTACT</Link>
        </li>
      </ul>
    </nav>
  )
}
