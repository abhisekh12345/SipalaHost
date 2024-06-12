"use client";
import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { CSSTransition } from "react-transition-group";


const FAQs = ({ faqs }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleFAQ = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="mb-[160px] mt-6">
      <div className="max-w-8xl mx-auto p-6 border border-gray-200 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-gray-900">Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} className="px-6 py-6 border border-gray-200">
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h4 className="font-bold text-gray-900">{faq.question}</h4>
              {expandedIndex === index ? (
                <FaChevronUp className="text-webGreen" />
              ) : (
                <FaChevronDown className="text-webGreen" />
              )}
            </div>
            <CSSTransition
              in={expandedIndex === index}
              timeout={1500}
              classNames="faq"
              unmountOnExit
            >
              <p className="mt-2 text-sm tracking-wide leading-6 normal-case">
                {faq.answer}
              </p>
            </CSSTransition>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
