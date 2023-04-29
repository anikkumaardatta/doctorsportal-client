import { format } from "date-fns";
import React from "react";

const BookingModal = ({ treatment, setTreatment, selectedDate }) => {
  // treatment is just another name of appointmentOptions with name, slots, _id

  const { service, slots } = treatment.serviceData;
  const handleBooking = (event) => {
    event.preventDefault();
    const form = event.target;
    const date = format(selectedDate, "PP");
    const slot = form.slot.value;
    const name = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const bookingData = {
      treatment: service,
      selectedDate: date,
      slot,
      patient: name,
      phone,
      email,
    };
    console.log(bookingData);
    setTreatment(null)
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
              placeholder="Type here"
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
              name="name"
              type="text"
              placeholder="Full Name"
              className="input input-bordered w-full my-2"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input input-bordered w-full my-2"
            />
            <input
              name="email"
              type="email"
              placeholder="Email"
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
