import React from 'react'
import Login from './Login';
import Create from './Create';
import {  Link } from 'react-router-dom';

function Ro() {
  return (
    <>
      <div className=' ml-40 mr-40 w-3/6'>
        <Link to="/Login">   
          <button className='mr-5 w-30 h-10 hover:bg-indigo-600  rounded-lg bg-indigo-500'>Login</button>
        </Link> 
        <Link to="/Create">   
          <button className='w-30 h-10 hover:bg-indigo-600 rounded-lg bg-indigo-500'>Create Account</button>
        </Link> 
      </div> 

     
    </>
  )
}

export default Ro