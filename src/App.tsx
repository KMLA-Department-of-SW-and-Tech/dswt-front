import {
  createBrowserRouter,
  redirect,
  RouterProvider,
  useNavigate,
  useLocation,
} from "react-router-dom"
import { useEffect, useRef } from "react"
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
  const sections = ["", "about", "people", "projects", "contacts"]
  const navigate = useNavigate()
  const location = useLocation()
  const isScrolling = useRef(false)

  useEffect(() => {
    const hash = location.hash.replace("#", "")
    const sectionIndex = sections.indexOf(hash)
    if (sectionIndex !== -1) {
      const targetPosition = sectionIndex * window.innerHeight
      document
        .querySelector(".scroll-container")
        ?.scrollTo({ top: targetPosition, behavior: "smooth" })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  interface ScrollEvent extends React.UIEvent<HTMLDivElement> {
    target: HTMLDivElement & EventTarget
  }

  const handleScroll = (e: ScrollEvent) => {
    if (isScrolling.current) return

    const currentScroll = e.target.scrollTop
    const height = window.innerHeight

    const pageIndex = Math.round(currentScroll / height)
    if (pageIndex >= 0 && pageIndex < sections.length) {
      isScrolling.current = true
      navigate(`#${sections[pageIndex]}`)

      // Allow scroll lock to release after animation completes
      setTimeout(() => {
        isScrolling.current = false
      }, 500) // Adjust this timeout to match scroll animation duration
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
      <div className="section" id="contacts">
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
