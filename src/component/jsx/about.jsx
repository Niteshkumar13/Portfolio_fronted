import React from 'react'
import "../css/about.css";
export default function About() {
  return (
    <div className='about-parent-container'>
      <h1 style={{ textAlign: "center" }}>About me</h1>
      <div className='about-child-container'>
        <h4 className='about-child-container-h4'> <span className='triangular-bullet'>~</span>I am a BCA Student at <a href="https://www.cimage.in/" target='__blank' style={{ textDecoration: "none",color:'orange' }} className='cimage-gdg'>CIMAGE</a> College, Patna.</h4>
        <h4 className='about-child-container-h4'><span className='triangular-bullet'>~</span>I was volunteer at <a href="https://www.gdgpatna.com/" target='__blank' style={{ textDecoration: "none",color:'orange' }} className='cimage-gdg'>GDG</a> Patna.</h4>

      </div>
    </div>
  )
}
