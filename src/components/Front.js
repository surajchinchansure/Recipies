import React from "react";
import { Link, Outlet } from "react-router-dom";
import "./basic.css";
const Front = () => {
  return (
    <div>
      <nav className="naver">
        <ul>
          <li>
            <Link to="/recFinder">Recipe</Link>
          </li>
          <li>
            <Link to="/log">Login</Link>
          </li>
        </ul>
      </nav>

      <section className="">
        <h1>
          <Link to="/recFinder">Go To Recipe Page</Link>
        </h1>
      </section>
      <Outlet />
    </div>
  );
};

export default Front;
