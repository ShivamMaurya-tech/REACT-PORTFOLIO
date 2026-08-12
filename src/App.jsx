import { ThemeProvider } from "./ThemeContext";
// FIX 1: Corrected the spelling to createBrowserRouter
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./PAGES/Home";

import { Skills } from "./PAGES/Skills";
import { Projects } from "./PAGES/Projects";
import { Contact } from "./PAGES/Contact";
import { AppLayout } from "./Layout/Applayout";
import { ErrorPage } from "./PAGES/ErrorPage";
import { KnowMore } from "./KnowMore";
// import { Portfolio } from "./Portfolio";

const App = () => {
  // FIX 2: Wrapped the route configuration inside an Array [ ]
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/skills", // Fixed missing "/" here
          element: <Skills />,
        },
        {
          path: "/projects",
          element: <Projects />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "Projects/:id",
          element: <KnowMore />,
        },
      ],
    },
  ]);

  // FIX 3: Cleaned up the return statement
  return (
    <ThemeProvider>
      {/* 
        The RouterProvider automatically looks at the 'router' array above 
        and renders the correct components based on the current URL.
        No need to manually list <Home />, <About />, etc. here!
      */}

      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
