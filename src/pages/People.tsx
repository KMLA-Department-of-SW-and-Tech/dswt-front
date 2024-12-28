import Nav from "../components/Nav.tsx"

export default function People() {
  return (
    <div>
      <Nav />
      <h1>People</h1>
      <h2>29th Wavers</h2>
      <div>
        <h3>Member1 Name</h3>
        <img alt="Member1 image" />
        <p>Member1 Title</p>
        <p>Member1 Bio</p>
      </div>
      <div className="Member2">
        <h3>Member2 Name</h3>
        <img alt="Member2 image" />
        <p>Member2 Title</p>
        <p>Member2 Bio</p>
      </div>
    </div>
  )
}
