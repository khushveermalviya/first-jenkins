import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"
import Create from './Create'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Root from '../Root';
export const UserContext = React.createContext();

function Login() {
  const [username, setUsername] = useState('');
  const [items, setItems] = useState({
    Email: '',
    Password: ''
  })
  
  const [err, setErr] = useState([])
  function handle(e) {
    setItems({
      ...items,
      [e.target.name]: e.target.value
    })
    console.log(items);
  }
  let navigate = useNavigate();

  function submit(event) {
    event.preventDefault();

    axios.post('http://localhost:5000/api/user/login', items)
  .then(response => {
    if (response.data.login) {
      navigate('/', { state: { username: response.data.login.username } });
      console.log("done asdjfoiasjdfaspd")
     
    } else { 
      return alert('Invalid email or Password');
    }
  })
  .catch(error => {
    console.error('There was an error!', error);
  });
  }

  return (
    <>
      {JSON.stringify(err)}
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="Create" element={<Create />} />
      </Routes>

      <div className='h-screen'>
        <div className='w-full drop-shadow-xl h-3/6 flex   justify-center items-center'>
          <div className='bg-orange-400 drop-shadow-xl  h-full mt-20 flex flex-col justify-center'>
            <div className=' ml-40 mr-40 w-3/6'>
              <Link to={'/Login'} className='mr-5 w-30 h-10 hover:bg-indigo-600  rounded-lg bg-indigo-500'>Login</Link>
              <Link to={'/Login/Create'} className='w-30 h-10 hover:bg-indigo-600 rounded-lg bg-indigo-500'>Create Account</Link>
            </div>
            <div className='mt-2 ml-40 mr-40 justify-center flex flex-col'>
              <input className='w-60 h-10 rounded-l-lg mt-10' type='text' name='Email' onChange={handle} placeholder='Email' />
              {err.Email && <p>{err.Email}</p>}
              <input className='w-60 h-10 rounded-l-lg mt-10' type='text' name='Password' onChange={handle} placeholder='Password' />
              {err.Password && <p>{err.Password}</p>}
              <button onClick={submit} className='w-30 h-10 mt-10 rounded-lg bg-indigo-500'>Login</button>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Login