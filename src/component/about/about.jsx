import React from 'react'
export default function About() {
  return (
    <div className='relative h-full w-full mx-auto   px-2.5 md:px-0 overflow-hidden text-center max-sm:mt-10 max-sm:px-5'>
      <span className='text-4xl'>About me</span>
      <ul className='list-disc text-xl pl-5 text-justify mt-2'>
        <li>I am a BCA Student at <a href="https://www.cimage.in/" target='__blank' className="no-underline font-serif text-orange-600" >CIMAGE</a> College, Patna.</li>
        <li>I was volunteer at <a href="https://www.gdgpatna.com/" target='__blank' className="no-underline font-serif text-orange-600">GDG</a> Patna.</li>
      </ul>
    </div>
  )
}
