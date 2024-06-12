"use client";
import React, { useState } from 'react';
import { format, addMonths, subMonths, addDays, isWithinInterval } from 'date-fns';

const NewCalendar = ({ availableDates = [], unavailableDates = [], tripDuration }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedStartDate, setSelectedStartDate] = useState(null);

  const startOfMonth = currentMonth;
  const endOfMonth = addMonths(currentMonth, 2);

  const handleDateClick = (date) => {
    if (availableDates.includes(format(date, 'yyyy-MM-dd'))) {
      setSelectedStartDate(date);
    }
  };

  const renderCalendarDays = () => {
    const days = [];
    let date = startOfMonth;
    while (date <= endOfMonth) {
      const dateString = format(date, 'yyyy-MM-dd');
      const isAvailable = availableDates.includes(dateString);
      const isUnavailable = unavailableDates.includes(dateString);
      const isSelected = selectedStartDate && format(date, 'yyyy-MM-dd') === format(selectedStartDate, 'yyyy-MM-dd');

      let isInTripDuration = false;
      if (selectedStartDate) {
        const endTripDate = addDays(selectedStartDate, tripDuration - 1);
        isInTripDuration = isWithinInterval(date, { start: selectedStartDate, end: endTripDate });
      }

      days.push(
        <div
          key={dateString}
          onClick={() => handleDateClick(date)}
          style={{
            backgroundColor: isSelected ? 'blue' : isInTripDuration ? 'lightblue' : isAvailable ? 'green' : isUnavailable ? 'red' : 'white',
            cursor: isAvailable ? 'pointer' : 'not-allowed',
            padding: '10px',
            margin: '5px',
            border: '1px solid #ccc',
          }}
        >
          {format(date, 'dd')}
        </div>
      );

      date = addDays(date, 1);
    }
    return days;
  };

  return (
    <div>
      <div>
        <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}>Previous</button>
        <span>{format(currentMonth, 'MMMM yyyy')}</span>
        <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}>Next</button>
      </div>
      <div className="calendar">
        {renderCalendarDays()}
      </div>
    </div>
  );
};

export default NewCalendar;
