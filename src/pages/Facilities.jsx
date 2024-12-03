import React from 'react';
import Section from '../components/Section';

function Facilities() {
  return (
    <div className="pt-16">
      <Section
        title="State-of-the-Art Facilities"
        description="From our cutting-edge fitness center to our rejuvenating spa, every amenity is designed to enhance your stay."
        imageSrc="/images/spa.jpg"
        imagePosition="right"
      />
    </div>
  );
}

export default Facilities;

