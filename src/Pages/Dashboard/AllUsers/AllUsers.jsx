import React from "react";
import Headding2 from "../../../Components/Texts/Headding2";
import { useQuery } from "react-query";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";

const AllUsers = () => {
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/all_users");
      const data = await res.json();
      return data;
    },
  });
  const handleMakeAdmin = (_id) => {
    fetch(`http://localhost:5000/all_users/admin/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `bearer ${localStorage.getItem('accessToken')}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make admin successfully.");
          refetch();
        }
      });
  };
  return (
    <div className="p-5">
      <div className="flex justify-between mx-5 flex-col md:flex-row">
        <Headding2>My Appointments</Headding2>
        <button className="btn btn-outline my-2">Button</button>
      </div>
      <div className="overflow-x-auto mt-5">
        {allUsers.length === 0 ? (
          <div className="flex justify-center bg-base-100 py-20 rounded-lg">
            <MdErrorOutline className="text-error text-2xl me-2" />
            <span className="text-error font-semibold">No User found</span>
          </div>
        ) : (
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
                <th>Delete User</th>
              </tr>
            </thead>
            <tbody>
              {allUsers.map((singleUser, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>{singleUser.name}</td>
                  <td>{singleUser.email}</td>
                  <td>
                    {singleUser.role === "admin" ? (
                      <div className="flex text-success">
                        <MdAdminPanelSettings className="text-2xl" />{" "}
                        <span className="font-semibold">Admin</span>
                      </div>
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(singleUser._id)}
                        className="btn btn-outline btn-xs rounded-sm hover:text-white"
                      >
                        Make Admin
                      </button>
                    )}
                  </td>
                  <td>
                    <button className="btn btn-outline btn-error btn-xs rounded-sm hover:text-white">
                      <BsTrash className="me-1" /> Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default AllUsers;
