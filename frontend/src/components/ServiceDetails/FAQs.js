"use client"
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQs = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const toggleFAQ = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Frequently Asked Questions</h3>
            {faqs.map((faq, index) => (
                <div key={index} className="mb-4">
                    <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                        <h4 className="font-bold">{faq.question}</h4>
                        {expandedIndex === index ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                    {expandedIndex === index && <p className="mt-2">{faq.answer}</p>}
                </div>
            ))}
        </div>
    );
};

export default FAQs;
