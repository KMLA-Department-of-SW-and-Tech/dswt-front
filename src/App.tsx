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
import Journey from "./pages/Journey"
import WhatWeDo from "./pages/WhatWeDo"
import Orgs from "./pages/Orgs"
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
  const sections = [
    "home",
    "about",
    "journey",
    "what-we-do",
    "projects",
    "orgs",
    "people",
    "contacts",
  ]
  const navigate = useNavigate()
  const location = useLocation()
  const isScrolling = useRef(false)
  const isNavigating = useRef(false)

  useEffect(() => {
    if (isScrolling.current) return

    const hash = location.hash.replace("#", "")
    const sectionIndex = sections.indexOf(hash)
    if (sectionIndex !== -1) {
      isNavigating.current = true
      const targetPosition = sectionIndex * window.innerHeight
      document
        .querySelector(".scroll-container")
        ?.scrollTo({ top: targetPosition, behavior: "smooth" })
      setTimeout(() => {
        isNavigating.current = false
      }, 500) // Adjust timeout to match scroll animation duration
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.hash])

  interface ScrollEvent extends React.UIEvent<HTMLDivElement> {
    target: HTMLDivElement & EventTarget
  }

  const handleScroll = (e: ScrollEvent) => {
    if (isNavigating.current) return

    const currentScroll = e.target.scrollTop
    const height = window.innerHeight

    const pageIndex = Math.round(currentScroll / height)
    if (pageIndex >= 0 && pageIndex < sections.length) {
      isScrolling.current = true
      // Update hash only if it's different from the current one
      const currentHash = location.hash.replace("#", "")
      if (sections[pageIndex] !== currentHash) {
        navigate(`#${sections[pageIndex]}`)
      }

      // Allow scroll lock to release after animation completes
      setTimeout(() => {
        isScrolling.current = false
      }, 500) // Adjust this timeout to match scroll animation duration
    }
  }

  return (
    <div className="scroll-container" onScroll={handleScroll}>
      <div className="section">
        <Home />
      </div>
      <div className="section">
        <About />
      </div>
      <div className="section">
        <Journey />
      </div>
      <div className="section">
        <WhatWeDo />
      </div>
      <div className="section">
        <Projects />
      </div>
      <div className="section">
        <Orgs />
      </div>
      <div className="section">
        <People />
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
