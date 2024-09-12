import React, { useState } from 'react';
import { MoonLoader } from 'react-spinners';
import { useThemeContext } from '../themeSwitcher/themeswitcher';
export default function Form() {
  const {theme} = useThemeContext()
  const [data, setData] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [isDataSend, setIsDataSend] = useState({
    loading: false,
    success: false
  })
  function dataSubmit(event) {
    try {
      setIsDataSend({ ...isDataSend, success: false, loading: true })
      if (data.name.length >= 4 && data.email.length >= 12) {
        const formdata = { first: data.name, second: data.email, third: data.message };
        console.log()
        fetch("https://portfolio-backend-wheat-ten.vercel.app/add-data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata)
        })
        setIsDataSend({ ...isDataSend, success: true, loading: false })
      }
      else {
        event.preventDefault();
        alert("Please Fill Proper Name and Email");
        setIsDataSend({ ...isDataSend, success: false, loading: false })
      }
    }
    catch {
      setIsDataSend({ ...isDataSend, success: false, loading: false })
      alert("something went wrong")
    }
  }
  return (
    <div className='h-auto min-h-[150px] flex flex-col  w-full gap-12 justify-center mx-auto  max-w-screen-xl px-2.5 md:px-0 overflow-hidden'>
      {!isDataSend.success && <div className='flex flex-col justify-center items-center gap-3'>
        <span className='text-3xl'>Have any query?</span>
        <form method='POST' className='flex flex-col gap-2 sm:py-2 justify-center items-center max-w-[500px] w-[100%] '>
          <input type='text' name="name" placeholder='enter your name' className='w-full p-[6px] px-2  outline-none text-black' required onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
          <input type='text' name="email" placeholder='enter your email'  className='w-full p-[6px] px-2  outline-none text-black' required onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
          <textarea name="message" placeholder='enter message' required onChange={e => setData({ ...data, [e.target.name]: e.target.value })}  className='w-full p-[6px] outline-none px-2 text-black'/>
          <button className='border-2 text-lg px-8 rounded-full py-1' onClick={dataSubmit} type='submit' style={{borderColor:theme.buttonBorder}} >Send</button>
        </form>
      </div>} 

      <div className='flex flex-col justify-center items-center gap-3'>
      {isDataSend.loading&&<MoonLoader color="#000000" />}
      {isDataSend.success&&<p className='text-center text-xl'><span style={{ fontSize: '32px' }}>Thanks for contact me</span><br />I will contact you soon</p>}
      </div>
    </div>
  )
}
