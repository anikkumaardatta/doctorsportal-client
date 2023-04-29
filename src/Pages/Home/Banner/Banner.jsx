import React from "react";
import bannerImage from "../../../assets/images/chair.png";
import bannerBg from "../../../assets/images/bg.png";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";

const Banner = () => {
  return (
    <header className="max-w-[1200px] mx-auto">
      <div className="hero min-h-full sm:my-2 md:py-5 lg:py-20"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}>
        <div className="hero-content flex-col lg:flex-row-reverse sm:my-2 md:my-5 my-12">
          <img
            src={bannerImage}
            className="lg:w-1/2 rounded-lg shadow-2xl"
          />
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Banner;
