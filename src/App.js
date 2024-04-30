
import './App.css';
import { Analytics } from "@vercel/analytics/react"
import Contactme from './component/jsx/contactme';
import Form from './component/jsx/form';
import{Showprofile} from './component/jsx/header';
import Project from './component/jsx/project';
import Tech from './component/jsx/tech';
import Themeswitcher from './component/jsx/themeswitcher';
import React,{useState,Suspense}  from 'react';
import About from './component/jsx/about';
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
