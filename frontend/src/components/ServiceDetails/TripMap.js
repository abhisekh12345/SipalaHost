
import React from 'react';

const TripMap = ({ mapImage }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Trip Map</h3>
            <img src={mapImage} alt="Trip Map" className="w-full h-64 object-cover" />
        </div>
    );
};

export default TripMap;
