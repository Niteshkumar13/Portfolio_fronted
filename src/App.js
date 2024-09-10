
import Contactme from './component/contact/contactme';
import Form from './component/contact/form';
import './App.css'
import{Showprofile} from './component/profile/header';
import Project from './component/project/project';
import Tech from './component/technology/tech';
import Themeswitcher from './component/themeswitcher';
import React,{useState,Suspense}  from 'react';
import About from './component/about/about';
import { Analytics } from '@vercel/analytics/react';


function App() {
let docTitle = document.title;
window.addEventListener("blur",()=>{
  document.title="Come Back <😊";
})
window.addEventListener("focus",()=>{
  document.title=docTitle;
})

  return (
    <div className="bg-blue-100" >
      {/* <Themeswitcher/> */}
      <Showprofile/>
       <Tech/>
     <About/>
       <Project/>
      {/*<Analytics />
      <Form/>
      <Contactme/> */}
    </div>
  );
}

export default App;
