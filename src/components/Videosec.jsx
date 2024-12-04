import React from 'react';
import Section from './Section';
import landmark_video from '../videos/landmark_video.mp4'; // Import video file

function Videosec() {
  return (
    <Section
      title="Breathtaking Views"
      description="Enjoy panoramic vistas of the city from our rooftop terrace, perfect for relaxation or hosting unforgettable events."
      videoSrc={landmark_video} // Pass the video source here
      videoPosition="left" // You can change this to "right" if needed
    />
  );
}

export default Videosec;
