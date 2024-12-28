import Nav from "../components/Nav.tsx"
import Footer from "../components/Footer.tsx"

export default function Login() {
  return (
    <div>
      <Nav />
      <h1>Log in</h1>
      <div className="container">
        <div className="inputs">
          <div className="input">
            <input type="email" placeholder="email" />
          </div>
          <div className="input">
            <input type="password" placeholder="password" />
          </div>
        </div>
        <div className="administrator">Administrator Only</div>
      </div>

      <Footer />
    </div>
  )
}
