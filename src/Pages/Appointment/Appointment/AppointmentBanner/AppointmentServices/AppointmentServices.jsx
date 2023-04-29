import React, { useEffect, useState } from "react";
import AppointmentService from "./AppointmentService";
import { format } from "date-fns";
import BookingModal from "../../../BookingModal/BookingModal";

const AppointmentServices = ({ selectedDate }) => {
  const [appointmentServices, setAppointmentServices] = useState([]);
  const [treatment, setTreatment] = useState(null);

  useEffect(() => {
    fetch("appointmentServices.json")
      .then((res) => res.json())
      .then((data) => setAppointmentServices(data));
  }, []);
  return (
    <section className="mt-20 max-w-[1200px] mx-auto">
      <div className="text-center">
        <div className="text-center">
          <h3 className="text-2xl text-secondary font-semibold ">
            Available Services on {format(selectedDate, "PP")}
          </h3>
          <h3 className="text-xl text-accent">Please select a service</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-auto mt-12 mb-20">
          {appointmentServices.map((serviceData) => (
            <AppointmentService
              key={serviceData._id}
              serviceData={serviceData}
              setTreatment={setTreatment}
            />
          ))}
        </div>
      </div>
      {treatment && (
        <BookingModal 
        key={treatment} 
        treatment={treatment} 
        setTreatment={setTreatment}
        selectedDate={selectedDate} 
        />
      )}
    </section>
  );
};

export default AppointmentServices;
