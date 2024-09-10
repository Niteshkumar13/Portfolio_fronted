import React from 'react'
export default function About() {
  return (
    <div className='h-full w-full mx-auto  max-w-screen-xl px-2.5 md:px-0 overflow-hidden text-2xl'>
      <h1>About me</h1>
      <div>
        <p> <span>~</span>I am a BCA Student at <a href="https://www.cimage.in/" target='__blank' className="no-underline font-serif text-orange-600" >CIMAGE</a> College, Patna.</p>
        <p><span>~</span>I was volunteer at <a href="https://www.gdgpatna.com/" target='__blank' className="no-underline font-serif text-orange-600">GDG</a> Patna.</p>
      </div>
    </div>
  )
}
