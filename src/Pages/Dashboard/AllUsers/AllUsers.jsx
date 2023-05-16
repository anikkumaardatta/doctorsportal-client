import React, { useState } from "react";
import Headding from "../../../Components/Texts/Headding";
import { useQuery } from "react-query";
import { MdErrorOutline } from "react-icons/md";
import { toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { MdAdminPanelSettings } from "react-icons/md";
import DeleteUserModal from "./DeleteUserModal/DeleteUserModal";
import Loading from "../../../Components/Loading/Loading";

const AllUsers = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const { data: allUsers = [], isLoading, refetch } = useQuery({
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
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
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
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-5">
      <div className="mx-5">
        <Headding>All Users</Headding>
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
                    {/* The button to open modal */}
                    <label
                      htmlFor="delete-modal"
                      onClick={() => setSelectedUser(singleUser)}
                      className="btn btn-outline btn-error btn-xs rounded-sm hover:text-white"
                    >
                      <BsTrash className="me-1" /> Delete
                    </label>
                  </td>
                </tr>
              ))}
            </tbody>
            
          </table>
        )}
        {
          selectedUser && <DeleteUserModal
          selectedUser={selectedUser}
          refetch={refetch}
        />
        }
      </div>
    </div>
  );
};

export default AllUsers;
