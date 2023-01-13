import React, { useState } from 'react';
import ArrowLeft from '../assets/image/arrow-left-grey.png';
import ArrowRight from '../assets/image/arrow-right-white.png';

export default function WhoWeAre() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const divVal = [
    {
      title: 'Who We Are',
      subTitle: 'Technology Company',
      text: 'Sed ut perspiciatis unde omnis iste natus sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
    },
    {
      title: 'What we do',
      subTitle: 'Professional Brand Management',
      text: 'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
    },
    {
      title: 'How we do',
      subTitle: 'Strategize, Design, Collaborate',
      text: 'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse sequam nihil molestiae consequatur.',
    },
  ];

  const handleNext = () => {
    setCurrentIndex(currentIndex === divVal.length - 1 ? 0 : currentIndex + 1);
  };
  const handlePrevious = () => {
    setCurrentIndex(currentIndex === 0 ? divVal.length - 1 : currentIndex - 1);
  };
  return (
    <section id="who-we-are">
      <div className="px-4 mx-auto lg:max-w-7xl  md:px-8 mt-14 lg:rounded-t lg:shadow-xl ">
        <div className={`${currentIndex} slide py-14`}>
          <h1 className="font-medium text-4xl text-[#029FE4] mb-3 md:mb-6">
            {divVal[currentIndex].title}
          </h1>
          <h3 className="text-lg md:text-2xl mb-4">
            {divVal[currentIndex].subTitle}
          </h3>
          <p className="text-sm md:text-lg text-[#777777]">
            {divVal[currentIndex].text}.
          </p>
        </div>

        <div className="grid grid-cols-2 pb-8">
          <div className="indexed flex align-bottom mt-auto">
            <p className="text-[#303030] text-2xl">{currentIndex + 1}</p>
            <p className="text-[#C0C0C0] text-2xl px-1">/</p>
            <p className="text-[#C0C0C0] mt-auto">{divVal.length}</p>
          </div>
          <div className="button-prev-next text-end">
            <button onClick={handlePrevious} className="py-4 px-4 bg-[#F1F1F1]">
              <img src={ArrowLeft} alt="Arrow Left" />
            </button>

            <button onClick={handleNext} className="py-4 px-4 bg-[#1BA0E1]">
              <img src={ArrowRight} alt="Arrow Right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
