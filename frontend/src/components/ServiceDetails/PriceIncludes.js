
import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';


const PriceIncludes = ({ includes }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Price Includes</h3>
            <ul className="list-disc list-inside">
                {includes.map((include, index) => (
                    <li key={index} className="flex items-start mb-2">
                      <FaChevronCircleRight className="mr-4 mt-1 text-webGreen " />
                      <p className="text-sm text-gray-700 tracking-wide normal-case">{include}</p>
                      </li>
                ))}
            </ul>
        </div>
    );
};

export default PriceIncludes;


