import React from "react";
import contactBannerBg from "../../../assets/images/appointment.png";
import PrimaryText from "../../../Components/Texts/PrimaryText";
import Headding2 from "../../../Components/Texts/Headding2";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";

const ContactForm = () => {
  return (
    <section
      className="mt-32"
      style={{
        backgroundImage: `url(${contactBannerBg})`,
      }}
    >
      <div className="text-center text-white p-5">
        <PrimaryText>Contact Us</PrimaryText>
        <h2 className="text-4xl font-semibold">Stay connected with us</h2>
      </div>
      {/* <!-- component --> */}
      <div className="flex justify-center items-center">
        {/* <!-- COMPONENT CODE --> */}
        <div className="container mx-auto px-4 lg:px-20 mb-12">
          <div className="my-5">
            <div className="flex">
            </div>
            <div className="grid my-4 grid-cols-1 gap-5 md:grid-cols-2">
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                required
              />
            </div>
            <div className="my-4">
              <textarea
                placeholder="Message*"
                className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <PrimaryBtn type="submit">Send Message</PrimaryBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
