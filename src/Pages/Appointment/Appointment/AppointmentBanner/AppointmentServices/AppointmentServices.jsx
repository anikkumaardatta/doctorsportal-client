import React, { useState } from "react";
import AppointmentService from "./AppointmentService";
import { format } from "date-fns";
import BookingModal from "../../../BookingModal/BookingModal";
import { useQuery } from "react-query";

const AppointmentServices = ({ selectedDate }) => {
  const [treatment, setTreatment] = useState(null);
  const date = format(selectedDate, 'PP')
  const { data: appointmentServices = [] , refetch} = useQuery({
    queryKey: ["appointment_services", date],
    queryFn: async() =>  {
      const res = await fetch(`http://localhost:5000/appointment_services?date=${date}`);
      const data = await res.json();
      return data;
    }
  });

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
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default AppointmentServices;
