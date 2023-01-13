import React from 'react';
import ArrowDown from '../assets/image/arrows_down.png';

export default function Hero() {
  return (
    <div className="image-hero lg:bg-center">
      <div className="clip-left md:hidden"></div>
      <div className="clip-right"></div>

      <div className="text-hero px-4 mx-auto lg:max-w-7xl md:px-8">
        <h1 className="title text-4xl text-white mb-4">Discover Your Wonder</h1>
        <h4 className="sub-title  text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam.
        </h4>
      </div>
      <a
        href="#our-values"
        className="py-4 px-3 rounded-3xl bg-white absolute btn-arrow shadow-md md:right-[49%]"
      >
        <img src={ArrowDown} alt="" />
      </a>
    </div>
  );
}
