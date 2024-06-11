
import React from 'react';

const GearsEquipment = ({ gears }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Gears and Equipment</h3>
            {gears.paragraphs.map((para, index) => (
                <p key={index} className="mb-4">{para}</p>
            ))}
            <ul className="list-disc list-inside">
                {gears.list.map((item, index) => (
                    <li key={index} className="flex items-center">
                        <img src={item.icon} alt={item.name} className="w-6 h-6 mr-2" />
                        {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default GearsEquipment;
