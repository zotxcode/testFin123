import React, { useState } from "react";

import Logo from "../assets/1-header/logo.png";
import MenuLogo from "../assets/8-mobile/menu-symbol-of-three-parallel-lines-svgrepo-com.svg";

function Sidebar(props) {
    const [toggle, setToggle] = useState(props.show);
  return (
    <div>
      <nav className="site-header pt-4 py-1 bg-blue d-md-none d-block">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <div className="py-2">
            <img
              src={MenuLogo}
              alt="MenuLogo"
              className="img-fluid"
              onClick={() => setToggle(true)}
            />
          </div>
        </div>
      </nav>
      <nav
        className={
          "bg-sidebar w-50 shadow p-3 text-white " + (toggle && "show")
        }
        id="sidebar-id"
      >
        <div className="d-flex justify-content-between">
          <img src={Logo} alt="logo" className="img-fluid" />
          <div>
            <span
              className="close text-white "
              onClick={() => setToggle(false)}
            >
              x
            </span>
          </div>
        </div>

        <ul className="nav flex-column py-4">
          <li className="nav-item">
            <a className="nav-link active" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pricing
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Careers
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Sidebar;
