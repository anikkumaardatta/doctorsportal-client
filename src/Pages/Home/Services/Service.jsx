import React from "react";

const Service = ({serviceData}) => {
    const {icon, title, describe} = serviceData;
  return (
    <section className="card shadow-lg bg-white">
      <figure>
        <img
          src={icon}
          alt="Shoes"
          className="p-8"
        />
      </figure>
      <div className="card-body pt-0 text-center text-accent">
        <h2 className="card-title mx-auto">
          {title}
        </h2>
        <p>{describe}</p>
      </div>
    </section>
  );
};

export default Service;
