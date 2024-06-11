import React from 'react';

const TripOverview = ({ title, paragraphs }) => {
    const highlightMonths = (text) => {
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const regex = new RegExp(`\\b(${months.join('|')})\\b`, 'g');
        return text.split(regex).map((part, index) => {
            if (months.includes(part)) {
                return <span key={index} className="font-xl font-bold">{part}</span>;
            }
            return part;
        });
    };

    return (
        <div className="p-4">
            <h3 className="text-xl text-gray-900 font-bold mb-2">{title}</h3>
            {paragraphs.map((para, index) => (
                <p key={index} className="mb-4 text-sm normal-case leading-7 tracking-wide text-gray-700">
                    {highlightMonths(para)}
                </p>
            ))}
        </div>
    );
};

export default TripOverview;
