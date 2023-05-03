import React from "react";
import clock from "../../../assets/icons/clock.png";
import marker from "../../../assets/icons/marker.png";
import phone from "../../../assets/icons/phone.png";
import InfoCard from "./InfoCard";

const InfoCards = () => {
  const cardsInfoData = [
    {
      _id: 1,
      icon: `${clock}`,
      title: "Opening hours",
      describe: "We are available on 10:00AM to 10:00PM",
      bgClass: "bgPrimary",
    },
    {
      _id: 2,
      icon: `${marker}`,
      title: "Visit our location",
      describe: "B.B Road Chashara, Narayanganj - 1400",
      bgClass: null,
    },
    {
      _id: 3,
      icon: `${phone}`,
      title: "Contact us now",
      describe: "Contact with us Hotline number +880-1970-192772",
      bgClass: "bgPrimary",
    },
  ];
  return (
    <section className="max-w-[1200px] mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4">
        {cardsInfoData.map((card) => (
          <InfoCard key={card._id} card={card} />
        ))}
      </div>
    </section>
  );
};

export default InfoCards;
