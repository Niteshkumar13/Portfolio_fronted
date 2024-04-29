import React from 'react';
import '../css/contactme.css';
import { icons } from '../data/icons';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Contactme() {
  return (
    <div className='show-tech1 after'  style={{backgroundColor:" #ff8e2b"}}>
        <h1 className='Contact-me'>Contact me</h1>
      <div className='icon-container1'>
      {icons.map((item, index) => (
        <a key={index} href={item.link} target="_blank" rel="noopener noreferrer" onclick="Javascript: return true;">
          <i className={item.icon}></i>
        </a>
      ))}
      </div>
      
    </div>
  )
}
