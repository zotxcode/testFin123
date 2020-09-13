import React from "react";


import partner1 from "../assets/5-partners/apple.PNG";
import partner2 from "../assets/5-partners/airbnb.png";
import partner3 from "../assets/5-partners/google.PNG";
import partner4 from "../assets/5-partners/nvidia.PNG";
import partner5 from "../assets/5-partners/tesla.PNG";
import partner6 from "../assets/5-partners/samsung.PNG";
import partner7 from "../assets/5-partners/facebook.PNG";
import partner8 from "../assets/5-partners/microsoft.PNG";

function Partners() {

  return (
    <div className="my-5">
      <h2 className="display-5 font-weight-bold text-blue text-center">
        We've worked with
      </h2>
      <div className="d-md-flex text-center justify-content-around">
        <img src={partner1} alt="partner1" />
        <img src={partner2} alt="partner2" />
        <img src={partner3} alt="partner3" />
        <img src={partner4} alt="partner4" />
        <img src={partner5} alt="partner5" />
        <img src={partner6} alt="partner6" />
        <img src={partner7} alt="partner7" />
        <img src={partner8} alt="partner8" />
      </div>
    </div>
  );
}

export default Partners;
