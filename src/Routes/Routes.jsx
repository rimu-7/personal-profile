import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Components/About";
import Showcase from "../Pages/Components/Showcase";
import Contact from "../Pages/Components/Contact";
import Social from "../Pages/Components/Social";
// import Showcase from "../Pages/Showcase/Showcase";
// import Contact from "../Pages/Contact/Contact";
// import Skills from "../Pages/Skills/Skills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />, // Main layout
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />, // Home Page
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/showcase",
        element: <Showcase />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/social",
        element: <Social />,
      },
    ],
  },
]);
