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
    <div className='h-full w-full mx-auto  max-w-screen-xl px-2.5 md:px-0 overflow-hidden'>
      <div className='flex flex-wrap justify-between items-center'>
        <div className='text-3xl max-sm:text-2xl'>
          <p className='flex flex-wrap items-center max-sm:justify-start'>
            <span>Hello,</span>
            <span>I am Nitesh kumar</span>
          </p>
          <span>I am a <span className='element' style={{ color: "orange" }}><TextTransition springConfig={presets.wobbly} inline="true">{TEXTS[index % TEXTS.length]}</TextTransition></span></span>
        </div>
        <img src="/favicon.png" className='rounded-full max-h-[230px] max-w-[230px]' alt="profile-pic" />
      </div>
    </div>
  )
}
