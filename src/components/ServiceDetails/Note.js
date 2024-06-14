"use client";
import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

const Note = ({ title, paragraphs }) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpansion = () => {
        setExpanded(prevExpanded => !prevExpanded);
    };

    // Function to highlight months in the paragraph text
    const highlightMonths = (text) => {
        const months = [
            "January", "February", "March", "April", "May", "June", 
            "July", "August", "September", "October", "November", "December"
        ];
        const regex = new RegExp(`\\b(${months.join('|')})\\b`, 'gi');
        return text.replace(regex, '<span class="text-gray-900 font-bold ">$1</span>');
    };

    return (
        <div className='p-4'>
            <div className="p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700 mb-4">
                <div className="flex items-center mb-2">
                    {!expanded ? (
                        <FaPlusCircle
                            className="cursor-pointer mr-2"
                            onClick={toggleExpansion}
                        />
                    ) : (
                        <FaMinusCircle
                            className="cursor-pointer mr-2"
                            onClick={toggleExpansion}
                        />
                    )}
                    <h4 className="font-bold text-gray-900 text-xl">{title}</h4>
                </div>
                {expanded ? (
                    <>
                        {paragraphs.map((paragraph, index) => (
                            <p
                                key={index}
                                className="mb-2 text-sm normal-case tracking-wide leading-6 text-gray-800"
                                dangerouslySetInnerHTML={{ __html: highlightMonths(paragraph) }}
                            ></p>
                        ))}
                    </>
                ) : (
                    <p
                        className="mb-2 text-sm normal-case tracking-wide leading-6 text-gray-800"
                        dangerouslySetInnerHTML={{ __html: highlightMonths(paragraphs[0]) }}
                    ></p>
                )}
                {!expanded && (
                    <button onClick={toggleExpansion} className="text-blue-500">
                        Read More
                    </button>
                )}
            </div>
        </div>
    );
};

export default Note;
