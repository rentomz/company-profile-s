import React from 'react';

export default function Hero() {
  return (
    <div className="image-hero lg:bg-hero-web lg:bg-center">
      <div className="clip-left"></div>
      <div className="clip-right"></div>

      <div className="text-hero px-4 lg:max-w-7xl md:px-8">
        <h1 className="title text-4xl text-white mb-4">Discover Your Wonder</h1>
        <h4 className="sub-title  text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </h4>
      </div>
    </div>
  );
}
