import React from "react";
import PrimaryText from "../../../Components/Texts/PrimaryText";
import Headding from "../../../Components/Texts/Headding";
import quote from "../../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const testiDatas = [
    {
      _id: 1,
      fName: "Pitter Parker",
      photo: "https://i.ibb.co/zfQKLP4/user4.jpg",
      location: "Mirpur",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 2,
      fName: "Jemi Jack",
      photo: "https://i.ibb.co/0j39Q5k/user9.jpg",
      location: "Dhanmondi",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
    {
      _id: 3,
      fName: "Alex Roob",
      photo: "https://i.ibb.co/zR1Ny6k/user3.jpg",
      location: "dfsdg",
      location: "Banasree",
      message:
        "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
    },
  ];
  return (
    <section className="mt-20 max-w-[1200px] mx-auto">
      <div className="flex justify-between m-5">
        <div>
          <PrimaryText>Testimonial</PrimaryText>
          <Headding>What Our Patients Says</Headding>
        </div>
        <div>
          <img className="w-24 md:w-32 lg:w-48" src={quote} alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-8 mx-auto">
        {
            testiDatas.map(testiData => <TestimonialCard
            key={testiData._id}
            testiData={testiData}
            ></TestimonialCard>)
        }
      </div>
    </section>
  );
};

export default Testimonial;
