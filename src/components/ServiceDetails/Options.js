// Options.js
"use client";
import React from 'react';



const Options = ({tourismInfo}) => {
  return (
    <div className="mb-4 py-2 px-1 rounded-md ">
      <h1 className='font-bold text-zinc-500 mb-4 '>Detail Package Info - Per Person</h1>
      {tourismInfo.map((item, index) => (
        <div key={index} className="border-b border-gray-200 mb-4 pb-3">
          <div className="flex justify-between items-center space-x-4">
            <p className=" text-gray-500  font-semibold">
              {item.title} 
            </p>
             <p className='text-gray-500 '>
               ${item.price}
             </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Options;
