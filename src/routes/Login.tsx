import Nav from "../components/Nav.tsx"
import Footer from "../components/Footer.tsx"

export default function Login() {
  return (
    <div>
      <Nav />

      <div className="container">
        <div className="header">
          <div className="text">Log in</div>
          <div className="underline"></div>
        </div>
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
