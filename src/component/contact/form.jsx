import React, { useState } from 'react';
import { MoonLoader } from 'react-spinners';
export default function Form() {
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
        fetch(process.env.REACT_APP_KEY, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formdata)
        })
      }
      else {
        event.preventDefault();
        alert("Please Fill Proper Name and Email");
      }
    }
    catch {
      alert("something went wrong")
    }
    finally {
      setIsDataSend({ ...isDataSend, success: true, loading: false })
    }
  }
  return (
    <div className='form-container'>
      {!isDataSend.success && <div>
        <span>Have any query?</span>
        <form method='POST'>
          <input type='text' name="name" placeholder='enter your name' required onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
          <input type='text' name="email" placeholder='enter your email' required onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
          <textarea name="msg" placeholder='enter message' required onChange={e => setData({ ...data, [e.target.name]: e.target.value })} />
          <button className='button' onClick={dataSubmit} type='submit'>Submit</button>
        </form>
      </div>}

      <div>
      {isDataSend.loading&&<MoonLoader color="#000000" />}
      {isDataSend.success&&<p ><span style={{ fontSize: '32px' }}>Thanks for contact me</span><br />I will contact you soon</p>}
      </div>
    </div>
  )
}
