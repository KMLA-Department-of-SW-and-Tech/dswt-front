import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from "./routes/Home"
import About from "./routes/About"
import Login from "./routes/Login"
import People from "./routes/People"
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css"

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
      element: <div>Project</div>,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
