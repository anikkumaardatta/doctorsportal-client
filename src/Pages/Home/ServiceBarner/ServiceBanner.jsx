import React from "react";
import bannerIMG from "../../../assets/images/treatment.png";
import Headding from "../../../Components/Texts/Headding";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";

const ServiceBanner = () => {
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row">
          <img src={bannerIMG} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="lg:w-1/2 m-5">
            <Headding>
              Exceptional Dental Care,
              <br />
              on Your Terms
            </Headding>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page
            </p>
            <PrimaryBtn>Get Started</PrimaryBtn>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceBanner;
