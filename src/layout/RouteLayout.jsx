import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RouteLayout = () => {
  return (
    <>
      <header>
        {/* <h1>Shakh | Live</h1>
        <div className="links">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/games">Games</NavLink>
          <NavLink to="/trainer">Trainer</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </div>
        <Navbar/> */}
      </header>
      <main>
        <Outlet/>
      </main>
      <footer></footer>
    </>
  );
};

export default RouteLayout;
