import React from "react";

const InfoCard = ({card}) => {
    const {icon, title, describe, bgClass} = card;
  return (
    <section className={
        bgClass? 
        `card card-side bg-gradient-to-r from-secondary to-primary text-white hover:scale-105 hover:shadow-2xl ease-in-out duration-100 shadow-xl p-5`
        :
        `card card-side bg-gradient-to-r from-accent to-neutral text-white hover:scale-105 hover:shadow-2xl ease-in-out duration-100 shadow-xl p-5`
    }>
      <figure>
        <img
          src={icon}
          alt="Movie"
        />
      </figure>
      <div className="card-body select-none p-2 px-3 text-white">
        <h2 className="card-title">{title}</h2>
        <p>{describe}</p>
      </div>
    </section>
  );
};

export default InfoCard;
