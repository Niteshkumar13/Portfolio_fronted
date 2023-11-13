import React,{useEffect} from 'react';
import './header.css';
import pic from './profile/WhatsApp_Image_2023-10-23_at_4.06.05_PM-removebg-preview.png';
import TextTransition, { presets } from 'react-text-transition';
export function Showprofile() {
  const TEXTS = ['Web Developer', 'Game Developer'];

    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
      const intervalId = setInterval(
        () => setIndex((index) => index + 1),
        3000,
      );
      return () => clearTimeout(intervalId);
    }, []);
  return (
    <div className='Showprofile'>

       <div className='show-about-name'>
        <div className='header-line'>
        <h1 className='hello-i-am'>Hello,</h1>
       <h1 className='hello-i-am'>I am Nitesh kumar</h1>
        </div>
       
       <h2 className='I-am-Full-stack'>I am a <span className='element' style={{color:"blue"}}><TextTransition springConfig={presets.wobbly} inline="true">{TEXTS[index % TEXTS.length]}</TextTransition></span></h2>
       </div>
<img src={pic} className='profile-pic' alt="profile-pic"/>

    </div>
  )
}
