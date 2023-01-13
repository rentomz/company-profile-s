import React, { useState } from 'react';
import ArrowLeft from '../assets/image/arrow-left-grey.png';
import ArrowRight from '../assets/image/arrow-right-blue.png';
import AccesoriesImg from '../assets/image/ic_accesories.png';
import ExhaustImg from '../assets/image/ic_exhaust.png';
import SpeedImg from '../assets/image/speed_improvement.png';

export default function OurSpeciality() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const Images = [SpeedImg, AccesoriesImg, ExhaustImg];

  const handleNext = () => {
    setCurrentIndex(currentIndex === Images.length - 1 ? 0 : currentIndex + 1);
  };
  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? Images.length - 1 : currentIndex - 1);
  };

  const rowsDot = [];
  for (let i = 0; i < Images.length; i++) {
    rowsDot.push(
      <div key={i} className={`${currentIndex === i ? "active-dot" : "dot"}`}>

      </div>
    );
}
  return (
    <section id="our-speciality">
      <div className="bg-[#509FDD]">
        <div className="p-4 mx-auto lg:max-w-7xl  md:p-8">
          <div className=" bg-white">
            <div className={`${currentIndex} slide py-10 px-8`}>
              <h1 className="font-medium text-4xl text-[#029FE4] mb-3 md:mb-6">
                OUR SPECIALITY
              </h1>
              <p className="text-sm md:text-lg text-[#303030]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </p>
              <img
                className="mx-auto my-6 carousel-slide center-slide"
                src={Images[currentIndex]}
                alt=""
              />
              <p className="text-sm md:text-lg text-[#A7A7A7] text-center mt-4 md:mt-8">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                euismod libero vel leo auctor, in venenatis nulla consequat. Sed
                commodo nunc sit amet congue aliquam.
              </p>
            </div>

            <div className="flex justify-between align-middle px-8">
              <button onClick={handlePrevious} className="py-4 px-4 ">
                <img src={ArrowLeft} alt="Arrow Left" />
              </button>
              <div className="indexed my-auto">
                {rowsDot}
                
              </div>

              <button onClick={handleNext} className="py-4 px-4  text-end">
                <img src={ArrowRight} alt="Arrow Right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
