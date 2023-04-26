import React from "react";
import doctorIMG from "../../../assets/images/doctor-small.png";
import appointmentBannerBg from "../../../assets/images/appointment.png";
import PrimaryText from "../../../Components/Texts/PrimaryText";
import PrimaryBtn from "../../../Components/Buttons/PrimaryBtn";

const MakeAppointment = () => {
  return (
    <section
      className="mt-32"
      style={{
        backgroundImage: `url(${appointmentBannerBg})`,
      }}
    >
      <div className="hero max-w-[1200px] mx-auto">
        <div className="hero-content flex-col lg:flex-row">
          <img src={doctorIMG} className="-mt-32 -mb-4 hidden lg:block lg:w-1/2 " />
          <div className="m-5 lg:-ml-16 text-white">
            <PrimaryText>Appointment</PrimaryText>
            <h1 className="text-4xl font-semibold">
              Make an appointment Today
            </h1>
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

export default MakeAppointment;
