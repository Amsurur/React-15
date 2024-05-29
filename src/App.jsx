import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./pages/home/Home";
import Contact from "./pages/contact/Contact";
import ContactById from "./pages/contactById/ContactById";

const App = () => {
  const a = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/contact/user/:id",
          element: <ContactById />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={a} />
    </div>
  );
};

export default App;
