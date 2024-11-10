import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Login from "./routes/Login"
import People from "./routes/People"
import Projects from "./routes/Projects"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"

function ProjectLoader() {
  const project = true // Temporary
  if (!project) {
    throw redirect("/404")
  }
  return project
}

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

export default App
