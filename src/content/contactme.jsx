import React from 'react';
import './contactme.css';
import { icons } from './icons';
import "bootstrap-icons/font/bootstrap-icons.css";


export default function Contactme() {
  return (
    <div className='show-tech1 after'  style={{backgroundColor:" #EEA47F"}}>
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
