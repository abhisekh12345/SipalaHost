// components/TrekkingName.js
import React from 'react';

const TrekkingName = ({ name, days,shortdescription }) => {
    return (
        <div className="text-left p-4">
            <h2 className="text-xl font-bold text-gray-900">{`${name} - ${days} Days`}</h2>
            <p className='text-sm mt-3 text-gray-700 normal-case tracking-wide'>{shortdescription}</p>
        </div>
    );
};

export default TrekkingName;
