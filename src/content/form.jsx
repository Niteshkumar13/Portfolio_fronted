import React,{useState} from 'react';
import './form.css';
import {MoonLoader} from 'react-spinners' ;
export default function Form() {
  const[first,sfirst] = useState("");
const[second,sSecond] = useState("");
const[third,sthird] = useState("");
const[form,sform] = useState(true);
const[loader,sloader] = useState(true);

  function dataSubmit(event){
    if (first.length >=4&&second.length>=12){
      sform(false)
    const data1 = {first,second,third};
      
console.log(process.env)
    fetch(process.env.REACT_APP_KEY,{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(data1)
    })
    setTimeout(()=>{
      sloader(false)
    }, 800);
    }
   else{
    event.preventDefault();
    alert("Please Fill Proper Name and Email");
   }
  }
  return (
    <div className='form-container'>
      {form&&<h1 style={{textAlign:"center"}}>Have any query?</h1>}
      <form method='post'>
      <div className='form-container2'>
      {form?<>
        <input type='text' name="name" placeholder='enter your name' required onChange={e=>sfirst(e.target.value)}/>
        <input type='text' name="email" placeholder='enter your email' required onChange={e=>sSecond(e.target.value)}/>
        <textarea name="msg" placeholder='enter message' onChange={e=>sthird(e.target.value)}/>
        <button className='button' onClick={dataSubmit} type='submit'>Submit</button>
        </>:(loader?<MoonLoader  color="#000000" />:<h2 className='thanks-for'><span style={{fontSize:'32px'}}>Thanks for contact me</span><br/>I will contact you soon</h2>)}
      </div>
      </form>
    </div>
  )
}
