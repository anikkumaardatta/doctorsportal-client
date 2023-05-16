import React, { useState } from "react";
import Headding from "../../../Components/Texts/Headding";
import AppointmentBanner from "./AppointmentBanner/AppointmentBanner";
import AppointmentServices from "./AppointmentBanner/AppointmentServices/AppointmentServices";

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <div>
      <AppointmentBanner
        selectedDate={selectedDate}
        setSelectedDate={setSelectedDate}
      />
      <AppointmentServices selectedDate={selectedDate} />
    </div>
  );
};

export default Appointment;
