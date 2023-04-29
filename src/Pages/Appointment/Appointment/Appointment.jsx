import React, { useState } from "react";
import Headding2 from "../../../Components/Texts/Headding2";
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
