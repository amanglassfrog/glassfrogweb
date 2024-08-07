"use client";
import React, { useState } from "react";

const VideoSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePlayButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="/glassfrogweb.mp4"
        autoPlay
        loop
        muted
      />
      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-70">
        <div className="container relative flex flex-col  justify-center h-full">
          <h1 className="text-white vhead font-bold mb-4">
            DIGITAL LANGUAGE THAT COMMUNICATES YOUR BUSINESS
          </h1>

          <div className="flex flex-col md:flex-row sm:flex-row gap-5">
            <a href="/digital-marketing"><button className="servicebutton1  ">
              Marketing/Social
            </button></a>
             <a href="/technology"><button className="servicebutton">
             Technology/Website
            </button></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSection;
