import React, { Component } from "react";
import { Link } from "react-scroll";
import logo from "../assets/1-header/logo.png";
import { ReactComponent as Search } from "../assets/7-icons/search.svg";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="site-header pt-4 py-1 bg-blue d-none d-md-block">
        <div className="container d-flex flex-column flex-md-row justify-content-between">
          <div className="py-2">
            <img src={logo} className="logo" alt="logo" />
          </div>
          <div>
            <Link
              className="py-2 px-4 d-none d-md-inline-block active"
              activeClass="active"
              to="headline1-id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Home
            </Link>

            <Link
              className="py-2 px-4 d-none d-md-inline-block"
              activeClass="active"
              to="headline1-id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Us
            </Link>

            <Link
              className="py-2 px-4 d-none d-md-inline-block"
              activeClass="active"
              to="headline1-id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Services
            </Link>

            <Link
              className="py-2 px-4 d-none d-md-inline-block"
              activeClass="active"
              to="headline1-id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Pricing
            </Link>

            <Link
              className="py-2 px-4 d-none d-md-inline-block"
              activeClass="active"
              to="headline1-id"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Careers
            </Link>
          </div>
          <div>
            <Search fill="white" />
          </div>
        </div>
      </nav>
    );
  }
}