import React from 'react'
import { useState } from 'react'
import axios from 'axios';

function Create() {
    const [items, setItems] = useState([])
    const [name, setName] = useState({
        Name:'',
        email:'',
        password:'',
    })

    function Submit(e){
        setName({
            ...name,
            [e.target.name]: e.target.value
        });
    }

    function handleSubmit(event){
        event.preventDefault();
      
        // Make a POST request to your server
        axios.post('http://localhost:4000/addUser', name)
          .then(response => {
            console.log(response);
            // Clear the form
            setName({
              Name: '',
              email: '',
              password: '',
            });
            // Add the new user to the items array
            setItems([...items, response.data]);
          })
          .catch(error => {
            console.error('There was an error!', error);
          });
    }

    return (<>
        {JSON.stringify(items)}
        <div className='h-screen flex justify-center'>
            <div className='mt-5 h-full w-full  flex justify-center   bg-slate-500'>
                <div className=' flex flex-col '>
                    <input className='w-60  h-10 rounded-l-lg mt-10' 
                        type='text' 
                        name='Name'
                        onChange={Submit}
                        placeholder='first Name'/>
                    <input className='w-60 h-10 rounded-l-lg mt-10' 
                        type='password' 
                        name='password'
                        onChange={Submit}
                        placeholder='Password'/>
                    <input className='w-60 h-10 rounded-l-lg mt-10' 
                        type='text' 
                        onChange={Submit}
                        name='email'
                        placeholder='Mail'/>
                    <button onClick={handleSubmit} className='w-30 h-10 mt-10 rounded-lg hover:bg-indigo-600 bg-indigo-500'>Submit</button>
                </div>
            </div>
        </div>
    </>)
}

export default Create