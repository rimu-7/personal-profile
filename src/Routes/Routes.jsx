import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import About from "../Pages/Components/About";
import Showcase from "../Pages/Components/Showcase";
import Contact from "../Pages/Components/Contact";
import Social from "../Pages/Components/Social";
import Skills from "../Pages/Components/Skills";
import Story from "../Pages/Components/Story";


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
      {
        path: "/skills",
        element: <Skills />,
      },
      {
        path: "/story",
        element: <Story />,
      },

    ],
  },
]);
