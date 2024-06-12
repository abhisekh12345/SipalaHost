import React from 'react';
import Image from 'next/image';

const DetailedItinerary = ({ itinerary }) => {
    return (
        <div className="detailed-itinerary p-4">
            {itinerary.map((dayDetail, index) => (
                <div key={index} className="mb-6">
                    {/* Day */}
                    <div className="text-gray-900 font-bold text-2xl mb-2">
                        Day {index + 1}
                    </div>

                    {/* Heading */}
                    <div className="text-gray-900 text-xl font-bold mb-4">
                        {dayDetail.title}
                    </div>

                    {/* Image */}
                    {dayDetail.image && (
                        <div className="mb-4">
                            <Image
                                src={dayDetail.image}
                                alt={`Image of ${dayDetail.imageLocation}`}
                                width={700} // Specify appropriate width
                                height={400} // Specify appropriate height
                                className="w-full h-[450px]"
                            />
                            <div className="text-left text-gray-900 mt-2">
                                {`${dayDetail.imageLocation}`}
                            </div>
                        </div>
                    )}

                    {/* Paragraphs */}
                    <div className="text-gray-700">
                        {dayDetail.description.map((paragraph, pIndex) => (
                            <p key={pIndex} className="mb-4 text-gray-950 text-sm tracking-wide leading-6">
                                {paragraph}
                            </p>
                        ))}
                    </div>

                    {/* Overnight */}
                    <div className="text-gray-900 mt-10">
                        <p className='text-sm'>Overnight in {dayDetail.overnightLocation}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailedItinerary;
