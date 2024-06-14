import React from 'react';

const ShortItinerary = ({ itinerary }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Short Itinerary</h3>
            <table className="table-auto w-full table-custom">
                <tbody>
                    {itinerary.map((item, index) => (
                        <tr key={index}>
                            <td className="px-4 py-4 w-[90px] font-bold">{item.day}</td>
                            <td className="px-4 py-4 text-sm text-gray-800 normal-case tracking-wide leading-6">{item.description}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ShortItinerary;
