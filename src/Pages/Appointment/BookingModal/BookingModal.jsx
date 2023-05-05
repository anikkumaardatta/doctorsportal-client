import { format } from "date-fns";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
  const { user } = useContext(AuthContext);
  // treatment is just another name of appointmentOptions with name, slots, _id

  const { _id, service, slots } = treatment.serviceData;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = format(selectedDate, "PP");
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const bookingData = {
      treatmentID: _id,
      treatment: service,
      appointmentDate: date,
      slot,
      parentID: user.uid,
      patient: name,
      phone,
      email,
    };
    fetch("http://localhost:5000/bookings", {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged === true) {
          setTreatment(null);
          toast.success("Booking confirmed");
          refetch()
        }else{
          toast.error(`Booking failed ${data.message}`);
        }
      });
    console.log(bookingData);
  };
  return (
    <>
      <input
        type="checkbox"
        id="booking-modal-trigger"
        className="modal-toggle"
      />
      <label htmlFor="booking-modal-trigger" className="modal cursor-pointer">
        <form
          onSubmit={handleBooking}
          className="modal-box relative"
          htmlFor=""
        >
          <label
            htmlFor="booking-modal-trigger"
            className="btn btn-sm btn-circle btn-accent text-white absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{service}</h3>
          <div>
            <input
              name="date"
              type="text"
              value={format(selectedDate, "PP")}
              disabled
              className="input input-bordered w-full my-2"
            />
            <>
              <select
                name="slot"
                className="select select-bordered w-full my-2"
              >
                {slots.map((slot, i) => (
                  <option key={i} value={slot} required>
                    {slot}
                  </option>
                ))}
              </select>
            </>

            <input
              defaultValue={user?.displayName}
              disabled
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full my-2"
            />
            <input
              defaultValue={user?.email}
              name="email"
              required
              type="email"
              placeholder="Email"
              className="input input-bordered w-full my-2"
            />
            <input
              name="phone"
              required
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full my-2"
            />
            <button
              type="submit"
              className="btn btn-block btn-accent text-white my-2"
              htmlFor="booking-modal-trigger"
            >
              Submit
            </button>
          </div>
        </form>
      </label>
    </>
  );
};

export default BookingModal;
