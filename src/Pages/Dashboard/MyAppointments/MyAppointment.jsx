import React from "react";

const MyAppointment = ({ myAppointment, index }) => {
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{myAppointment.patient}</td>
      <td>{myAppointment.treatment}</td>
      <td>{myAppointment.appointmentDate}</td>
      <td>{myAppointment.slot}</td>
    </tr>
  );
};

export default MyAppointment;
