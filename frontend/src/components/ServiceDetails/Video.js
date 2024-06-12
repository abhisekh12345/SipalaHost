
import React from 'react';

const Video = ({ videoUrl }) => {
    return (
        <div className="p-4">
            <h3 className="text-xl font-bold mb-2">Trip Video</h3>
            <iframe
                src={videoUrl}
                title="Trip Video"
                className="w-full h-[450px]"
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default Video;
