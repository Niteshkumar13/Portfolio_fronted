
import './App.css';
import Contactme from './content/contactme';
import Form from './content/form';
import{Showprofile} from './content/header';
import Project from './content/project';
import Tech from './content/tech';
import Themeswitcher from './content/themeswitcher';
import React,{useState,Suspense}  from 'react';
import About from './content/about';
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
    <div className="App" >
      <Themeswitcher/>
      <Showprofile/>
      <Tech/>
      <About/>
      <Project/>
    <Analytics />
      <Form/>
      <Contactme/>
    </div>
  );
}

export default App;
