// components/PriceIncludes.js
import React from 'react';

const PriceIncludes = ({ includes }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Price Includes</h3>
            <ul className="list-disc list-inside">
                {includes.map((include, index) => (
                    <li key={index}>{include}</li>
                ))}
            </ul>
        </div>
    );
};

export default PriceIncludes;
