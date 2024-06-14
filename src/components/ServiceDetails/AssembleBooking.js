"use client"
import React, { useEffect } from 'react';
import NumberOfPeopleInput from './NumberOfPeopleInput';
import Options from './Options';
import TotalPrice from './TotalPrice';
import { setTripPricePerPerson } from '@/redux/slices/bookingSlice';
import { useDispatch } from 'react-redux';

const AssembleBooking = ({tourismInfo}) => {

    const dispatch = useDispatch()
  
      useEffect(() => {
        const totalTripPrice = tourismInfo.reduce((total, info) => total + info.price, 0);
        dispatch(setTripPricePerPerson(totalTripPrice));
      },[tourismInfo])


  return (
    <div className="max-w-8xl mx-auto p-6 border border-red-700">
      <div className="border border-gray-200 rounded-xl py-5 px-2 pr-5">
        <h1 className="text-2xl font-bold mb-6 text-center text-webGreen underline">Booking and Reservation System</h1>
        <p className="text-gray-500  font-semibold px-6">Trip duration : 9 days </p>
        <div className="grid grid-cols-1 md:grid-cols-3 ">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4 p-4  rounded-md">
              <NumberOfPeopleInput  tourismInfo={tourismInfo} />
              <Options tourismInfo={tourismInfo} />
            </div>
          </div>
          <div className="col-span-1">
            <div className="mb-4 bg-gray-50 p-2 h-full rounded-lg">
              <TotalPrice options={tourismInfo}  />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssembleBooking;
