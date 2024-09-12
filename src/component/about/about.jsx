import React from 'react'
import { useThemeContext } from '../themeSwitcher/themeswitcher'
export default function About() {
  const {theme} = useThemeContext()
  
  return (
    <div className='relative h-full w-full mx-auto   px-2.5 md:px-0 overflow-hidden text-center max-sm:mt-10 max-sm:px-5'>
      <span className='font-normal text-3xl '>About me</span>
      <ul className='list-disc text-xl pl-5 text-justify mt-2'>
        <li>I am a BCA Student at <a href="https://www.cimage.in/" target='__blank' className="no-underline font-serif" style={{color:theme.highlightedtext}}>CIMAGE</a> College, Patna.</li>
        <li>I was volunteer at <a href="https://www.gdgpatna.com/" target='__blank' className="no-underline font-serif" style={{color:theme.highlightedtext}}>GDG</a> Patna.</li>
      </ul>
    </div>
  )
}
