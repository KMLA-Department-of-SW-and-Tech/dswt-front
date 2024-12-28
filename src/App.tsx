import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useNavigate,
} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Login from "./pages/Login"
import People from "./pages/People"
import Projects from "./pages/Projects"
import Contacts from "./pages/Contacts"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"

/*
function ProjectLoader() {
  const project = true // Temporary
  if (!project) {
    throw redirect("/404")
  }
  return project
}*/

const ScrollablePages = () => {
  const sections = ["", "about", "people", "projects", "contact"]
  const navigate = useNavigate()

  interface ScrollEvent extends React.UIEvent<HTMLDivElement> {
    target: HTMLDivElement & EventTarget
  }

  const handleScroll = (e: ScrollEvent) => {
    const currentScroll = e.target.scrollTop
    const height = window.innerHeight

    const pageIndex = Math.round(currentScroll / height)
    if (pageIndex >= 0 && pageIndex < sections.length) {
      navigate(`#${sections[pageIndex]}`)
    }
  }

  return (
    <div className="scroll-container" onScroll={handleScroll}>
      <div className="section" id="home">
        <Home />
      </div>
      <div className="section" id="about">
        <About />
      </div>
      <div className="section" id="people">
        <People />
      </div>
      <div className="section" id="projects">
        <Projects />
      </div>
      <div className="section" id="contact">
        <Contacts />
      </div>
    </div>
  )
}

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ScrollablePages />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/404",
      element: <div>Not found</div>,
    },
    {
      path: "*",
      loader: () => {
        throw redirect("/404")
      },
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

/*
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/people",
      element: <People />,
    },
    {
      path: "/projects/:id",
      element: <Projects />,
      loader: ProjectLoader,
    },
    {
      path: "/404",
      element: <div>Not found</div>,
    },
    {
      path: "*",
      loader: () => {
        throw redirect("/404")
      },
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}
*/
export default App
