import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

const TripHighlights = ({ highlights }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl text-gray-900 font-bold mb-2">Trip Highlights</h3>
            <ul>
                {highlights.map((highlight, index) => (
                    <li key={index} className="flex items-start mb-2">
                        <FaChevronCircleRight className="mr-3 mt-1 text-webGreen" />
                        <p className="text-sm text-gray-700 tracking-wide normal-case">{highlight}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};


export default TripHighlights;
