import React from "react";
import bannerImage from "../../../assets/images/chair.png";
import bannerBg from "../../../assets/images/bg.png";

const Banner = () => {
  return (
    <div>
      <div className="hero min-h-full sm:my-2 md:py-5 lg:py-20"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse sm:my-2 md:my-5 my-12">
          <img
            src={bannerImage}
            className="max-w-xs mb-8 lg:mb-0 sm:max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
