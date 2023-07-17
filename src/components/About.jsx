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
              <p> When I am not typing away in an editor, I enjoy hiking, traveling, writing, and connecting with others. </p>
              <p> My favorite part of programming? DEBUGGING! There is something about clearing error codes and tracing logic that I find very satisfying. </p>
              <p>I want to be a part of a team creating software that empowers the lives of the people using it. If I’d make a good fit with your company, let’s connect!  </p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
