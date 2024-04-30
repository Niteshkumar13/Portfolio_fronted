import React, { useState,useEffect } from 'react';
import '../css/project.css';
import {MoonLoader} from 'react-spinners' ;
import data from '../data/data';
import { Tilt } from 'react-tilt';
import { addborder } from './tech';
import { LazyLoadImage } from 'react-lazy-load-image-component';
export default function Project() {
  const [ss,Sss] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      Sss(false)
    },650)
  }, []);
  return (
    <div className='form-container2'>
   <span className='Technology-i' style={{marginTop:'30px'}}>Projects</span>
{ss?<MoonLoader/>:data.map((data1,index)=>{
    return (
      <div className='project-container' style={{flexDirection:index%2!==0&&'row-reverse'}}>
        <div className='header-data-container'>
          <div className='description-with-title'>
        <h2 style={{textAlign:"center"}}>{data1.title}</h2>
        <h5 className='data1-description'>{data1.description}</h5>
        </div>
        <div className='description-with-title'>
        {data1.tech.map((techImage, techIndex) => (
              <img
                key={techIndex}
                src={techImage}
                alt={`Tech ${techIndex} of Set ${index + 1}`}
                className="icon-tech"
                loading="lazy" onClick={()=>addborder(".icon-tech")}
              />
            ))}
            </div>
        <div>
         </div>
         <div>
        {data1.see_live&& <a href={data1.live} target='_blank'><button className='live-button'>live</button></a>}
        <a href={data1.code} target='_blank' ><button  className='live-button'>Code</button></a>
        </div>
        </div>
        <Tilt   options={{ max: 5.8, scale: 1 ,transition:true}}> <LazyLoadImage src={data1.thumbnail} className='project-image' alt={`image${index}`}/></Tilt>
    </div>
    )
  })
}
    </div>
  )
}
