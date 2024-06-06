import React from 'react';

const Arrow = ({ className, extraClass, onClick, icon }) => {
  return (
    <div className={`${className} ${extraClass} custom-arrow`} onClick={onClick}>
      {icon}
    </div>
  );
};

export default Arrow;
