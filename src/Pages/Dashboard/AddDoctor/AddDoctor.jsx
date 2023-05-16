import React from "react";
import Headding from "../../../Components/Texts/Headding";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import Loading from "../../../Components/Loading/Loading";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddDoctor = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate()
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const { data: serviceNames = [], isLoading } = useQuery({
    queryKey: ["serviceName"],
    queryFn: async () => {
      const res = await fetch(
        "http://localhost:5000/appointment_service_names"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleAddDoctor = (data) => {
    const image = data.image[0];
    // add doctor image to server
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const doctor = {
            name: data.name,
            email: data.email,
            specialty: data.specialty,
            imgUrl: imgData.data.url,
          };
          console.log(doctor);
          // add doctor to database
          fetch("http://localhost:5000/add_doctor", {
            method: "POST",
            headers: {
              'content-type': 'application/json',
              authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify(doctor),
          })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged){
              toast.success(`${doctor.name} added as a Doctor`)
              navigate('/dashboard/manage_doctors')
            }
            console.log("Hurrrrrrrrrrye",data, doctor.name);
          })
        }
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="p-5 mx-5">
      <Headding>Add A Doctor</Headding>
      <form
        className="max-w-lg bg-white p-7 pt-4 mt-5 rounded-lg shadow-xl"
        onSubmit={handleSubmit(handleAddDoctor)}
      >
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Name</span>

            {errors.name && (
              <span className="label-text-alt text-error">
                {errors.name?.message}
              </span>
            )}
          </label>
          <input
            type="text"
            {...register("name", {
              required: "Name is required",
              maxLength: {
                value: 20,
                message: "Name is too longer",
              },
            })}
            placeholder="Name"
            className={
              errors.name
                ? "rounded-sm input-error input text-accent font-medium input-bordered w-full"
                : "rounded-sm input-accent input text-accent font-medium input-bordered w-full"
            }
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Email</span>

            {errors.email && (
              <span className="label-text-alt text-error">
                {errors.email?.message}
              </span>
            )}
          </label>
          <input
            type="text"
            {...register("email", {
              required: "Email Address is required",
            })}
            placeholder="Email"
            className={
              errors.email
                ? "rounded-sm input-error input text-accent font-medium input-bordered w-full"
                : "rounded-sm input-accent input text-accent font-medium input-bordered w-full"
            }
          />
        </div>
        <div className="form-control w-full my-2">
          <label className="label">
            <span className="label-text">Specialty</span>

            {errors.specialty && (
              <span className="label-text-alt text-error">
                {errors.specialty?.message}
              </span>
            )}
          </label>
          <select
            {...register("specialty", {
              required: "Specialty is required",
            })}
            className="select select-accent rounded-sm"
          >
            {serviceNames?.map((serviceName) => (
              <option key={serviceName._id} value={serviceName.service}>
                {serviceName.service}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-center w-full mt-8">
          <label
            for="dropzone-file"
            className="flex flex-col items-center justify-center w-full h-auto border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 hover:bg-gray-100 "
          >
            <div className="flex flex-col items-center justify-center pt-5 pb-6">
              <svg
                aria-hidden="true"
                className="w-10 h-10 mb-3 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                ></path>
              </svg>
              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Click to upload</span> or drag and
                drop
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            </div>
            <input
              type="file"
              {...register("image", {
                required: "Image is required",
              })}
              id="dropzone-file"
              className="file-input mb-6 file-input-bordered file-input-ghost file-input-xs w-full max-w-xs cursor-pointer"
            />
          </label>
        </div>

        <input
          className="btn btn-accent w-full my-4 text-white rounded-sm"
          value="Add"
          type="submit"
        />
      </form>
    </div>
  );
};

export default AddDoctor;
