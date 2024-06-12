"use client"
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setNumberOfPeople, addService } from "../../redux/slices/bookingSlice"

const BookingModal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { numberOfPeople, tripPrice, additionalServices, serviceCharge } = useSelector((state) => state.booking);
  const [localNumberOfPeople, setLocalNumberOfPeople] = useState(numberOfPeople);

  const handlePeopleChange = (e) => {
    const value = parseInt(e.target.value);
    setLocalNumberOfPeople(value);
    dispatch(setNumberOfPeople(value));
  };

  const handleServiceChange = (serviceId, serviceName, servicePrice, quantity) => {
    dispatch(addService({ serviceId, serviceName, servicePrice, quantity }));
  };

  const totalPrice = tripPrice * localNumberOfPeople + additionalServices.reduce((sum, service) => sum + service.servicePrice * service.quantity, 0) + serviceCharge;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <button onClick={onClose} className="absolute top-2 right-2 text-2xl font-bold text-black">
          &times;
        </button>
        <div className="mb-4">
          <label className="block font-bold mb-2">Number of People</label>
          <input type="number" value={localNumberOfPeople} onChange={handlePeopleChange} className="border px-2 py-1 w-full" />
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Trip Price</label>
          <p>{`$${tripPrice * localNumberOfPeople}`}</p>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Additional Services</label>
          {data.additionalServices.map((service) => (
            <div key={service.serviceId} className="flex justify-between items-center mb-2">
              <span>{service.serviceName}</span>
              <input
                type="number"
                value={service.quantity}
                onChange={(e) => handleServiceChange(service.serviceId, service.serviceName, service.servicePrice, parseInt(e.target.value))}
                className="border px-2 py-1 w-16"
              />
              <span>{`$${service.servicePrice * service.quantity}`}</span>
            </div>
          ))}
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Service Charge</label>
          <p>{`$${serviceCharge}`}</p>
        </div>
        <div className="mb-4">
          <label className="block font-bold mb-2">Total Price</label>
          <p>{`$${totalPrice}`}</p>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
