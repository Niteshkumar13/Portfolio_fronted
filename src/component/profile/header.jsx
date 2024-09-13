import { useState, useEffect } from 'react';
import TextTransition, { presets } from 'react-text-transition';
import { useThemeContext } from '../themeSwitcher/themeswitcher';
export function Showprofile() {
  const TEXTS = [`Web Developer`, 'Game Developer'];
  const [index, setIndex] = useState(0);
  const {theme} = useThemeContext()
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000,
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className='h-[400px] flex flex-col  w-full gap-12 justify-center mx-auto  max-w-screen-xl px-2.5 md:px-0 overflow-hidden'>
      <div class="flex flex-wrap justify-between items-center max-md:gap-5 max-sm:mt-10 max-sm:justify-center max-sm:gap-6">
  <div class="text-3xl max-sm:text-2xl">
    <p class="flex flex-col">
      <span class="text-6xl max-sm:text-[40px] font-semibold">Hello,</span>
      <span>I am Nitesh kumar</span>
      <span class="max-sm:w-[280px] ">
        I am a {' '}
        <span class="element font-mono" style={{color:theme.highlightedtext}}>
          <TextTransition springConfig={presets.wobbly} inline="true">{TEXTS[index % TEXTS.length]}</TextTransition>
        </span>
      </span>
    </p>
  </div>
  <img src="/favicon.png" class="rounded-full max-h-[230px] max-w-[230px] w-auto" alt="profile-pic" />
</div>
    </div>
  )
}
