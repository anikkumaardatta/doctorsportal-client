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
      <div class="flex justify-center items-center">
        {/* <!-- COMPONENT CODE --> */}
        <div class="container mx-auto px-4 lg:px-20 mb-12">
          <div class="my-5">
            <div class="flex">
            </div>
            <div class="grid my-4 grid-cols-1 gap-5 md:grid-cols-2">
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="First Name*"
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="text"
                placeholder="Last Name*"
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="email"
                placeholder="Email*"
                required
              />
              <input
                class="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                type="number"
                placeholder="Phone*"
                required
              />
            </div>
            <div class="my-4">
              <textarea
                placeholder="Message*"
                class="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit" className="btn bg-gradient-to-r from-secondary to-primary text-white border-0">Send Message</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
