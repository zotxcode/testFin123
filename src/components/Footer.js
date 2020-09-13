import React from "react";
import { Link } from "react-scroll";

import Logo from "../assets/1-header/logo.png";

function Footer() {
  return (
    <footer className="bg-footer" id="footer-id">
      <div className="container py-5 text-white ">
        <div className="row">
          <div className="col-12 col-md mb-2">
            <img src={Logo} alt="logo" />
            <h5 className="d-inline-block px-3">Easy Work</h5>
          </div>
          <div className="col-6 col-md">
            <h5>Address</h5>
            <p>
              <small className="text-white-50">
                52-1, Jalan Awan Hijau, Taman Overseas Union, 58200 Kuala
                Lumpur, Wilayah Persekutuan Kuala Lumpur
              </small>
            </p>
          </div>
          <div className="col-3 col-md">
            <h5>Contact</h5>
            <small className="text-white-50">03-7451 5283</small>
            <br />
            <br />
            <h5>Fax</h5>
            <small className="text-white-50">03-7451 5283</small>
          </div>
          <div className="col-3 col-md position-relative">
            <Link
              className="py-2 px-4 active position-absolute"
              activeClass="active"
              to="app"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              style={{bottom: 0, right: 0}}
            >
              Back to the top
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
