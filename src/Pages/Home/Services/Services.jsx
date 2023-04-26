import React from "react";
import fluoride from "../../../assets/images/fluoride.png";
import cavity from "../../../assets/images/cavity.png";
import whitening from "../../../assets/images/whitening.png";
import Service from "./Service";
import PrimaryText from "../../../Components/Texts/PrimaryText";
import Headding2 from "../../../Components/Texts/Headding2";

const Services = () => {
  const servicesData = [
    {
      _id: 1,
      icon: `${fluoride}`,
      title: "Fluoride Treatment",
      describe:
        "Fluoride joins the tooth structure when your teeth develop, making them less to bacteria and cavities.",
    },
    {
      _id: 2,
      icon: `${cavity}`,
      title: "Cavity Filling",
      describe:
        "“Does it hurt to get a cavity filled?” The good news is, getting a cavity filled relieve discomfort.",
    },
    {
      _id: 3,
      icon: `${whitening}`,
      title: "Teeth Whitening",
      describe:
        "Yellow teeth can be completely whitened with teeth whitening technologies at the dentist or at home.",
    },
  ];
  return (
    <section className="text-center mt-20 max-w-[1200px] mx-auto">
        <PrimaryText>Our Services</PrimaryText>
        <Headding2>Services We Provide</Headding2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto">
        {servicesData.map((serviceData) => (
          <Service key={serviceData._id} serviceData={serviceData} />
        ))}
      </div>
    </section>
  );
};

export default Services;
