import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {
  ReactComponent as Heart
} from "../assets/7-icons/heart.svg";
import {
  ReactComponent as ArrowRight
} from "../assets/7-icons/arrow-right.svg";
import person1 from "../assets/4-people/jerome-boudot.jpg";
import person2 from "../assets/4-people/david-campion.jpg";
import person3 from "../assets/4-people/vincent-joignie.jpg";
import person4 from "../assets/4-people/vincent-joignie.jpg";


function Testimonials() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const ButtonGroup = ({ next }) => {
    return (
      <div className="carousel-button-group position-absolute testimony-custom-next-btn" >
        <div onClick = {
          () => next()
        }
        className="p-3 rounded-circle bg-white-2" >
          <ArrowRight fill="blue" />
        </div>
      </div>
    );
  };

  const TestiGroup = ({image, name, position, says}) => {
    return (
        <div className = "px-3 m-3 rounded testimony-wrapper" >
          <div className="d-flex py-3">
            <div>
              <img className="rounded-circle img-fluid align-self-center" src={image} alt="person" />
            </div>
            <div className="pl-2">
              <div className="name"><b>{name}</b></div>
              <div className="position"><small>{position}</small></div>
            </div>
          </div>
          <div className="pb-3">
            "{says}"
          </div>
        </div>
    );
  };

  return (
    <div className="position-relative">
      <div className="mb-5 d-flex">
        <div className="mx-3 ">
        <div className="p-3 rounded-circle bg-red red-icon-shadow" >
          <Heart fill="white" />
        </div>
        </div>
        <div className="col-md-5">
        <h2 className="display-5 font-weight-bold text-blue">What people says about our service</h2></div>

      </div>
      <Carousel
        showDots={true}
        partialVisible={true}
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside={true}
        customButtonGroup={<ButtonGroup />}
      >
        <TestiGroup 
          image={person2} 
          name="David Champion" 
          position="CEO of iCloud" 
          says="System is excellent. It has made my system user experience to become one of the easiest!"
        />
        <TestiGroup 
          image={person3} 
          name="David Fran van Hord" 
          position="CEO of Marks.io" 
          says="I just wanted to share a quick note and let you know that you guys do a really good job."
        />
        <TestiGroup 
          image={person1} 
          name="Lucas Bond" 
          position="BOD of Skyscanner" 
          says="System is excellent. It has made my system user experience to become one of the easiest!"
        />
        <TestiGroup 
          image={person4} 
          name="Ivan Runner" 
          position="CEO of iCloud" 
          says="System is excellent. It has made my system user experience to become one of the easiest!"
        />

      </Carousel>
    </div>

  );
}


export default Testimonials;
