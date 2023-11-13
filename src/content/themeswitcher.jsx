import React,{useState} from 'react';
import './theme.css';
import {ch} from './theme';
import Stars from './backgroundAnimation';
export default function Themeswitcher() {
   const [pColor,sPColor] = useState("#000000");
   const COLOR = pColor;
    function chnage_theme(a,b,c,d){
      const x = document.querySelector("body");
      const y = document.querySelector(".after");
      const buttons = document.querySelectorAll("button");
      buttons.forEach(button => {
        button.style.outlineColor = b;
        button.addEventListener('mouseover', () => {
          button.style.backgroundColor = b;
        });
        button.addEventListener('mouseout', () => {
          button.style.backgroundColor ="white";
        });
      });
      x.style.backgroundColor=a;
      x.style.color=d;
      const anotherText1 = document.querySelectorAll(".cimage-gdg");
      const anotherText = document.querySelector(".element");
      const anotherText3 = document.querySelectorAll(".triangular-bullet");
      anotherText.style.color="blue"; 
      anotherText1.forEach((data,index)=>(
        <>
        {data.style.color="blue"}
        {anotherText3[index].style.color="blue"}
        </>
      ))
      sPColor("#000000");
      if (d === "white"){
        sPColor("#FFFFFF");
        anotherText1.forEach((data,index)=>(
        <>
          {anotherText3[index].style.color="orange"}
          {data.style.color="orange"}
        </>
        ))
        anotherText.style.color="orange"
        const textColor = document.querySelectorAll(".after-hover-content");
        textColor.forEach(data=>(data.style.color="black"))
      }
      y.style.backgroundColor=c;
    }
    const particleStyles = {
      position: 'absolute',
      width: '100%',
      height: '100%',
      zIndex:-1
    };
  return (
    <>
    <div style={particleStyles}>
    <Stars color={pColor}/>
    </div>
    <div className='container-of-theme'>
        <div className='container-of-theme1'>
    {ch.map((item)=> (
        <div className='the'   style={{backgroundColor:item.bg}} onClick={() => chnage_theme(item.bg,item.color,item.color1,item.textColor)}></div>
      ))}
    </div>
    </div>
    </>
  )
  module.exports = COLOR;
}


