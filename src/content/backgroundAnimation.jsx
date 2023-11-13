import React,{useCallback} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
export default function Stars(props) {
  const particlesInit = useCallback(async (engine)=>{
    await loadFull(engine);
    
  },[])
  const particlesLoaded = useCallback(async (container)=>{
    await container;
  },[])
  return (
    <div>
            <Particles 
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              interactivity:{
                 events:{
                   onClick:{
                     enable: true,
                     mode: "repulse",
                 },
                 onHover: {
                   enable: true,
                   mode: "bounce",
                   parallax: {
                     enable: false,
                     force: 2,
                     smooth: 10
                   }
                 },
                 resize: true,
                 }, 
               },
               particles:{
                 color: {
                   value: props.color,
               },
               collisions: {
                 enable: false,
                 mode: "bounce",
               },
                 shape:{
                   type:"circle",
                 },
                 size:{
                   value:{min:1,max:3}
                 },
                 number:{
                   value:100
                 },
                 move:{
                   direction:'none',
                   enable:true,
                   outModes:{
                     default:"bounce"
                   },
                   speed:.35
                 },
                 opacity: {
                   animation: {
                     enable: true,
                     minimumValue: 0,
                     speed: 1,
                     sync: false
                   }},
               },  
          }}
    />
    </div>
  );
}         
