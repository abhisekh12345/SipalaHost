// NumberOfPeopleInput.js
"use client";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { selectBooking } from "../../redux/slices/bookingSlice";




const NumberOfPeopleInput = ({tourismInfo}) => {
  const { tripPricePerPerson } = useSelector(selectBooking);
  const [numberOfPeople, setNumberOfPeople] = useState(1);

  const handleNumberOfPeopleChange = (event) => {
    setNumberOfPeople(Number(event.target.value));
  };

  const totalTripPrice = numberOfPeople * tripPricePerPerson;
  const totalTourismPrice = tourismInfo.reduce(
    (total, item) => total + item.price,
    0
  );
 

  return (
    <div className="mb-2 py-4 pb-7 border-y border-gray-200">
      <h1 className=" font-bold text-zinc-500 pl-2 mb-3">Package</h1>
      <div className="flex justify-between items-center space-x-4">
        <div className="flex items-center">
          <div>
            <input
              type="number"
              value={numberOfPeople}
              onChange={handleNumberOfPeopleChange}
              min="1"
              className="ml-2 mt-1 p-2 border border-gray-300 rounded-md w-16"
            />
          </div>
          <p className="text-gray-500  ml-3 font-bold ">Trip Price</p>
        </div>
        <div>
            <span className="text-gray-500 text-lg">${totalTripPrice}</span> 
        </div>
      </div>
      <div>
      </div>
    </div>
  );
};

export default NumberOfPeopleInput;
