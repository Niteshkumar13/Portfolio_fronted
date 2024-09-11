import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
export function Showprofile() {
  const TEXTS = ['Web Developer', 'Game Developer'];
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className='h-[400px] bg-red flex flex-col  w-full gap-12 justify-center mx-auto  max-w-screen-xl px-2.5 md:px-0 overflow-hidden'>
      <div className='flex  flex-wrap justify-between items-center  max-md:gap-5 max-sm:mt-10 max-sm:justify-center max-sm:gap-6'>
        <div className='text-3xl max-sm:text-2xl sm:w-[325px] max-sm:w-[270px]'>
          <p className='flex justify-start flex-col'>
            <span className='text-4xl font-semibold'>Hello,</span>
            <span>I am Nitesh kumar</span>
            <span className='w-full'>I am a <span className='element font-mono' style={{ color: "orange" }}><TextTransition springConfig={presets.wobbly} inline="true">{TEXTS[index % TEXTS.length]}</TextTransition></span></span>
          </p>
        </div>
        <img src="/favicon.png" className='rounded-full max-h-[230px] max-w-[230px]' alt="profile-pic" />
      </div>
    </div>
  )
}
