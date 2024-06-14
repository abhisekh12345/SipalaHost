"use client";
import React from "react";
import { useSelector } from "react-redux";
import { selectBooking } from "../../redux/slices/bookingSlice";
import ReuseButton from "../ReuseComponent/ReuseButton";



const TotalPrice = ({options}) => {
  const { numberOfPeople, tripPricePerPerson, selectedOptions, serviceCharge } =
    useSelector(selectBooking);

  const totalTripPrice = numberOfPeople * tripPricePerPerson;
  const optionsTotalPrice = Object.keys(selectedOptions).reduce(
    (total, optionId) => {
      const option = options.find((option) => option.id === optionId);
      const optionPrice = option ? option.price : 0;
      return total + selectedOptions[optionId] * optionPrice * numberOfPeople;
    },
    0
  );

  const totalPrice = totalTripPrice + optionsTotalPrice + serviceCharge;

  return (
    <div className="mb-4 p-4 ">
      <div className="flex justify-between mb-4">
        <p className="text-gray-500  font-semibold">Trip Price: </p>
        <p className="text-gray-600"> ${totalTripPrice.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-4">
        <p className="text-gray-500  font-semibold"> Service Charge: </p>
        <p className="text-gray-600"> ${serviceCharge.toFixed(2)}</p>
      </div>
      <div className="flex justify-between mb-4 pt-4 border-t border-gray-300">
        <h3 className="text-gray-500  font-semibold">  Total Price: </h3>
        <h3 className="text-gray-600">  ${totalPrice.toFixed(2)}</h3>
      </div>
       
        <div className="flex justify-end mt-9">
             <ReuseButton name="Book Now" />
        </div>
    
    </div>
  );
};

export default TotalPrice;
