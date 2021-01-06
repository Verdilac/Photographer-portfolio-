import React from "react";
import home1 from '../img/home1.png'

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We Work to Make</h2>
          </div>
          <div className="hide">
            <h2>
              Your <span>dreams </span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true.</h2>
          </div>
        </div>
        <p>contact us for any photograpy or videograpy ideas that you have.
            we have professionals with amazing skills.
        </p>
        <button>Contact us</button>
      </div>
      <img src={home1} alt="guy with a camera"/>
    </div>
  );
};

export default AboutSection;
