
import React from 'react';

const ImportantInformation = ({ information }) => {
    return (
        <div className="p-4 bg-blue-100">
            <h3 className="text-xl font-bold mb-2">Important Information</h3>
            <ul className="list-disc list-inside">
                {information.map((info, index) => (
                    <li key={index}>{info}</li>
                ))}
            </ul>
        </div>
    );
};

export default ImportantInformation;
