import React, { useState,useEffect} from 'react';
import { BrowserRouter, Routes, Route, Link,useLocation } from 'react-router-dom';
import SIdeMenu from './SIdeMenu';
import Login from './Auth/Login.jsx';
import Home from './Home';
import Nav from './Nav';
import Cards from './Cards';
import Ro from './Auth/Ro';
import Description from './Description.jsx';
import { FiAlignJustify,FiX } from "react-icons/fi";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import Data from './Data';
import Create from './Auth/Create.jsx';

function Root() {
  const [items, setItems] = useState(0)
  const location = useLocation();
  const { username } = location.state || {};
  console.log(username)
  function addCart(){
      setItems(prev=>prev+1)
  }

  const [show, setShow] = useState(false);

  const slide = () => {
    setShow(!show);
  } 

  return (
    <div>
    
      <div className='flex justify-between ali w-full h-53 bg-gray-400 font-mono  fixed top-0 left-0 right-0 z-20'>
        <div className='flex pr-5 ml-5 mt-2'> 
        <Link className='pr-5 hover:text-lg sm:hidden ' onClick={slide} to={show ? '/' : '/SIdeMenu'}>
          {show ? <FiX /> :<FiAlignJustify /> }
          </Link>
         <Link to="/" className='text-xl font-semibold  mb-2 hover:text-xl'>laxmi keys</Link>
        </div>
          
        
          

              <Link className='pr-5 hover:-translate-y-1 hover:scale-110 hover:text-xl ' to="/About">Galleryasdfasdf</Link>
           
            </div>
            <div>
            <Link to='/Login' className='pr-5'>
    <button className='bg-indigo-500 shadow-lg shadow-indigo-500/50  hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 text-white font-bold py-2 px-4 rounded'>
      {username ? username : 'Login'}

    </button>
    </Link>
           
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>{items}</button>
            </div>
   </div> 
5
        <Routes>
          <Route path="/" element={<Cards addCart={addCart}  />} />
          { show && <Route path="/SIdeMenu" element={<SIdeMenu />} />}
          <Route path="/Description/:productId" element={<Description data={Data} />} />



        <Route path="/Login/*" element={<Login />}/>
 
        </Routes>

      <div className='flex bg-red'></div>
    </div>
  );
}

export default Root;