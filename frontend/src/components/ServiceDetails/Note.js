// components/Note.js
import React from 'react';

const Note = ({ text }) => {
    return (
        <div className="p-4 bg-blue-100 border-l-4 border-blue-500 text-blue-700">
            <p>{text}</p>
        </div>
    );
};

export default Note;
