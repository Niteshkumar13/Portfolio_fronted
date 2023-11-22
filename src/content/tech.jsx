import react,{useState,useEffect} from 'react';
import './tech.css';
import {MoonLoader} from 'react-spinners' ;
import icon from './icon';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css'
function addborder(p){
  var elements = document.querySelectorAll(p);
  elements.forEach(function (element) {
    element.addEventListener("click", function () {
        elements.forEach(function (el) {
            el.classList.remove("selected");
        });
        this.classList.add("selected");
        setTimeout(function(){
          element.classList.remove("selected");
      },1000);
    });
});
}

export {addborder};
export default function Tech() {
  const [ss,Sss] = useState(true)
useEffect(() => {
  setTimeout(()=>{
    Sss(false)
  },650)
  
}, []);
  return (
    <div className='show-tech' >
       <span className='Technology-i'>Technologies I know</span>
     <div className='icon-container'>
     {ss?<MoonLoader/>:icon.map((data,index)=>{
      return( 
        <>
        <div className='full-container1' onClick={()=>addborder(".full-container1")}>
  <img src={data.img}   className='image-icon' alt={data.value} data-tooltip-id={`my-tooltip-children-multiline${index}`}/>
<Tooltip id={`my-tooltip-children-multiline${index}`} style={{ backgroundColor: "red",width:'250px',borderRadius:"15px",display:"flex",justifyContent:"center",zIndex:100 }} className='tool-tip'>
  <div className='after-hover'>
     <h1 className='after-hover-content'>{data.header}</h1> 
     <p className='after-hover-content'>{data.about}</p>
  </div>
</Tooltip>
    </div>
      </>
     )})}   
      </div>
    </div>
  )
}
