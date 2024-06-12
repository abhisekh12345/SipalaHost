"use client"
import React from 'react';

const BookingButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="bg-blue-500 text-white px-4 py-2 rounded">
      Book Now
    </button>
  );
};

export default BookingButton;
