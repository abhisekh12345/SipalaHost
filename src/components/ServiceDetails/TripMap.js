import React from 'react';
import { FaDownload } from 'react-icons/fa';
import Image from 'next/image';

const TripMap = ({ mapImage }) => {
    return (
        <div className="p-4">
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold">Trip Map</h3>
                <a href={mapImage} download className="flex items-center text-blue-500 hover:text-blue-700">
                    <FaDownload className="mr-1" />
                    Download
                </a>
            </div>
            <div >
                <Image 
                    src={mapImage} 
                    alt="Trip Map" 
                    width={600} 
                    height={800}
                    objectFit="cover" 
                    className='w-full h-auto'
                />
            </div>
        </div>
    );
};

export default TripMap;
