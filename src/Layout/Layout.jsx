import React from "react";
import { Link, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <ul className="flex gap-5">
          <Link to="/">Home</Link>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
