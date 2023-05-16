import React, { useState } from "react";
import Headding from "../../../Components/Texts/Headding";
import { useQuery } from "react-query";
import { MdErrorOutline } from "react-icons/md";
import Loading from "../../../Components/Loading/Loading";
import DeleteDoctorModal from "./DeleteDoctorModal/DeleteDoctorModal";

const ManageDoctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const { data: allDoctors = [], isLoading, refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      try {
        const res = await fetch("http://localhost:5000/all_doctor", {
          headers: {
            authorization: `bearer ${localStorage.getItem("accessToken")}`,
          },
        });
        const data = await res.json();
        return data;
      } catch (error) {}
    },
  });
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-5">
      <div className="mx-5">
        <Headding>Manage Doctors</Headding>
      </div>
      <div className="overflow-x-auto mt-5">
        {allDoctors.length === 0 ? (
          <div className="flex justify-center bg-base-100 py-20 rounded-lg">
            <MdErrorOutline className="text-error text-2xl me-2" />
            <span className="text-error font-semibold">
              No Doctors available
            </span>
          </div>
        ) : (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Profile</th>
                  <th>Specialty</th>
                  <th>Remove</th>
                </tr>
              </thead>

              <tbody>
                {allDoctors.map((singleDoctor, index) => (
                  <tr>
                    {index.length > 9 ? (
                      <th>{index + 1}</th>
                    ) : (
                      <th>0{index + 1}</th>
                    )}
                    <td>
                      <div className="flex items-center space-x-3">
                        <div className="">
                          <div className="">
                            <img
                              className="w-16 h-1w-16 rounded-full border-4 border-primary"
                              src={singleDoctor.imgUrl}
                              alt={`Photos of ${singleDoctor.name}`}
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{singleDoctor.name}</div>
                          <div className="text-sm opacity-50">
                            {singleDoctor.email}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>
                      <div className="font-semibold">
                        {singleDoctor.specialty}
                      </div>
                    </td>
                    <th>
                      <label
                        htmlFor="deleteDoctor-modal"
                        onClick={() => setSelectedDoctor(singleDoctor)}
                        className="btn btn-error btn-sm rounded-sm"
                      >
                        Remove
                      </label>
                    </th>
                  </tr>
                ))}
                {selectedDoctor && (
                  <DeleteDoctorModal
                    key={selectedDoctor?._id}
                    selectedDoctor={selectedDoctor}
                    refetch={refetch}
                  />
                )}
              </tbody>
            </table>
          </div>
        )}
        {}
      </div>
    </div>
  );
};

export default ManageDoctors;
