import React, { useContext } from "react";
import Headding2 from "../../../Components/Texts/Headding2";
import { AuthContext } from "../../../contexts/AuthProvider";
import { useQuery } from "react-query";
import MyAppointment from "./MyAppointment";
import { MdErrorOutline } from 'react-icons/md';


const MyAppointments = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/my_appointments?email=${user?.email}`;
  console.log(url);

  const {
    data: myAppointments = [],
    isPending,
    error,
  } = useQuery({
    queryKey: ["repoData", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers:{
          authorization: `bearer ${localStorage.getItem('accessToken')}`
        }
      });
      const data = await res.json();
      return data;
    },
  });
  console.log('kkkkk',myAppointments);

  return (
    <div className="p-5">
      <div className="flex justify-between mx-5 flex-col md:flex-row">
        <Headding2>My Appointments</Headding2>
        <button className="btn btn-outline my-2">Button</button>
      </div>
      <div className="overflow-x-auto mt-5">
        {myAppointments.length === 0 ? (
          <div className="flex justify-center bg-base-100 py-20 rounded-lg">
            <MdErrorOutline className="text-error text-2xl me-2"/>
            <span className="text-error font-semibold">No Appointments found</span>
          </div>
        ) : (
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Service</th>
                <th>Date</th>
                <th>Slot</th>
              </tr>
            </thead>
            <tbody>
              {myAppointments.map((myAppointment, index) => (
                <MyAppointment
                  key={myAppointment._id}
                  myAppointment={myAppointment}
                  index={index}
                />
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default MyAppointments;
