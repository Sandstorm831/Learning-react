import { createBrowserRouter, Link, Outlet, RouterProvider } from "react-router-dom"
import DashBoard from "./components/Dashboard"
import Landing from "./components/Landing"
import ErrorPage from "./components/error-page"
import React, { Suspense } from "react"
const Contacts = React.lazy(() => import("./components/Contacts.jsx")) ;

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
      errorElement: <ErrorPage />,
      children: [{
        path: "/contacts/:id",
        element: <Suspense><Contacts /></Suspense> // Suspense is used to impart the asynchronous nature to the lazy import of component, as otherwise, since fetching will take time, It will throw error
      },
      {
        path: "/dashboard",
        element: <DashBoard />,
      }]
    }
  ])

  return <div>
    <div>
      I don't know, why it can't link properties
    </div>
    <RouterProvider router={router} />
    </div>
}

export default App
