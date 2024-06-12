import React from 'react';
import { FaChevronCircleRight } from 'react-icons/fa';

const ImportantInformation = ({ information }) => {
    return (
        <div className='p-4 rounded-lg overflow-hidden'>
        <div className="p-4 bg-blue-100">
            <h3 className="text-xl font-bold mb-2">Important Information</h3>
            <ul className="list-none list-inside">
                {information.map((info, index) => (
                    <li key={index} className="flex items-start text-sm tracking-wider text-gray-900 leading-6 mb-2">
                        <FaChevronCircleRight className="mt-1 mr-2 text-webGreen" />
                        <span>{info}</span>
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
};

export default ImportantInformation;
