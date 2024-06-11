"use client"
import React, { useState } from 'react';

const DetailedItinerary = ({ itinerary }) => {
    const [activeDay, setActiveDay] = useState(null);

    const toggleDay = (index) => {
        setActiveDay(activeDay === index ? null : index);
    };

    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Detailed Itinerary</h3>
            {itinerary.map((day, index) => (
                <div key={index}>
                    <div
                        className="flex items-center cursor-pointer"
                        onClick={() => toggleDay(index)}
                    >
                        <span className="mr-2">{`Day ${index + 1}:`}</span>
                        <span className="font-bold">{day.title}</span>
                        <span className="ml-auto">{activeDay === index ? '▲' : '▼'}</span>
                    </div>
                    {activeDay === index && (
                        <div className="mt-2 p-2 border-l-2">
                            <p>{day.description}</p>
                            {day.image && (
                                <img src={day.image} alt={day.title} className="mt-2 w-full h-48 object-cover" />
                            )}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};

export default DetailedItinerary;
