import React, { useState } from "react";
import bannerImage from "../../../../assets/images/chair.png";
import bannerBg from "../../../../assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import PrimaryText from "../../../../Components/Texts/PrimaryText";

const AppointmentBanner = ({ selectedDate, setSelectedDate }) => {
  const dateCss = `
  .my-selected:not([disabled]) { 
    font-weight: bold; 
    border: 2px solid currentColor;
  }
  .my-selected:hover:not([disabled]) { 
    border-color: blue;
    color: blue;
  }
  .my-today { 
    font-weight: bold;
    color: #19D3AF;
  }
`;
  return (
    <header className="max-w-[1200px] mx-auto">
      <div
        className="hero min-h-full sm:my-2 md:py-5 lg:py-20 lg:pt-0"
        style={{
          backgroundImage: `url(${bannerBg})`,
        }}
      >
        <div className="hero-content flex-col lg:flex-row-reverse sm:my-2 md:my-5 my-12">
          <img src={bannerImage} className="lg:w-1/2 rounded-lg shadow-2xl" />
          <div className="text-center lg:text-left">
            <h1 className="text-4xl font-bold">Choose an appointment date</h1>
            <div className="bg-slate-300 rounded-lg bg-opacity-25">
              <style>{dateCss}</style>
              <DayPicker
                className=" pt-5 flex justify-center"
                mode="single"
                selectedDate={selectedDate}
                onSelect={setSelectedDate}
                modifiersClassNames={{
                  selected: 'my-selected',
                  today: 'my-today'
                }}
              />
              <p className="text-xl text-center pb-5">
                You have selected date:
                <span className="font-semibold text-emerald-500 text-2xl">
                  {" "}
                  {format(selectedDate, "PP")}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
