import React from "react";

const AppointmentService = ({ serviceData, setTreatment }) => {
  const { service, slots } = serviceData;
  return (
    <div>
      <div className="rounded-lg shadow-lg py-8 bg-white text-secondary duration-100 ease-in-out select-none hover:shadow-2xl">
        <h2 className="text-xl font-semibold text-center">{service}</h2>
        <h4 className="text-sm text-accent m-1">
          {slots.length > 0 ? slots[0] : "Try Another Day"}
        </h4>
        <h4 className="text-sm text-accent m-1">
          {slots.length} {slots.length > 1 ? "SPACES" : "SPACE"} AVAILABLE
        </h4>
        <label
          disabled={slots.length === 0}
          onClick={() => setTreatment({serviceData})}
          htmlFor="booking-modal-trigger"
          className="btn btn-wide btn-secondary text-white mt-2"
        >
          Book Appointment
        </label>
      </div>
    </div>
  );
};

export default AppointmentService;
