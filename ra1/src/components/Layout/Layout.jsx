import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="nav_bg  ">
        <div className="container innernav  d-flex">
          <div className="left_nav col-md-6    p-4 text-white">
            <Link
              className="ms-4 text-decoration-none text-white fs-2 fw-bold "
              to="/"
            >
              Start Framework
            </Link>
          </div>

          <div className="right_nav col-md-6  d-flex justify-content-end align-items-center ">
            <Link
              className="ms-4 text-decoration-none text-white fs-5 fw-bold "
              to="About"
            >
              About
            </Link>
            <Link
              className="ms-4 text-decoration-none text-white fs-5 fw-bold "
              to="Portfolio"
            >
              Portfolio
            </Link>
            <Link
              className="ms-4 text-decoration-none text-white fs-5 fw-bold "
              to="Contact"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>

      <Outlet />

      <div className="footer  nav_bg ">
        <div className="container d-flex text-white p-5">
          <div className="col-md-4 text-center">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>

          <div className="col-md-4 text-center">
            <h2>AROUND THE WEB</h2>

            <i class="fa-brands rounded-circle  fs-5 border p-2  m-2 fa-facebook "></i>
            <i class="fa-brands rounded-circle  fs-5 border p-2  m-2 fa-twitter"></i>
            <i class="fa-brands rounded-circle  fs-5 border p-2  m-2 fa-linkedin-in"></i>
            <i class="fa-brands rounded-circle  fs-5 border p-2  m-2 fa-internet-explorer "></i>
          </div>
          <div className="col-md-4 text-center">
            <h2>ABOUT FREELANCER</h2>
            <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
          </div>
        </div>
      <div className="bg-dark container-fluid text-center text-white pb-3 pt-2 ">
<p>Copyright © Your Website 2021</p>
      </div>
      </div>
    </>
  );
}
