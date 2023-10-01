// import React from 'react'

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

function MainLayout() {
  return (
    <div className="mx-4 md:mx-10 lg:mx-32">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default MainLayout;
