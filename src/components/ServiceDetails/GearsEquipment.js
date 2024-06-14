import React from 'react';
import Image from 'next/image';
import { IoIosArrowDropright } from 'react-icons/io';

const GearsEquipment = ({ gears }) => {
    return (
        <div className="p-4 max-w-4xl mx-auto">
            <h3 className="text-2xl tx font-bold mb-6 text-left">Gears and Equipment</h3>
            {gears.paragraphs.map((para, index) => (
                <p key={index} className="mb-4 text-sm tracking-wide normal-case leading-6 text-gray-900">{para}</p>
            ))}
            <div className="mt-8 space-y-8">
                {gears.list.map((item, index) => (
                    <div key={index} className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                            <Image src={item.icon} alt={item.name} width={68} height={68} className=' rounded-full ' />
                        </div>
                        <div>
                            <h4 className="text-xl font-semibold">{item.name}</h4>
                            {item.list && (
                                <ul className="mt-2 space-y-1">
                                    {item.list.map((listItem, listIndex) => (
                                        <li key={listIndex} className="flex items-start">
                                            <IoIosArrowDropright className="mt-1 mr-2 text-webGreen" />
                                            <span className='text-sm tracking-wide normal-case leading-6 text-gray-900'>{listItem}</span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default GearsEquipment;
