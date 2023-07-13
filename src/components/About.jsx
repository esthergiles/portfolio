import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-green-300'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. My name is Esther. Thanks for popping by!</p>
            </div>
            <div>
              <p>Creative and curious, I bring a level-headed and compassionate approach to teamwork. I am a recent graduate, proficient in PHP and C++, with a passion for software development and user-centric design. I enjoy learning new languages, frameworks, and ways to write cleaner, DRY code. </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;