import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter  } from 'react-router-dom';
import Login from './Pages/Auth/Login.jsx'
import Create from './Pages/Auth/Create.jsx'
import Root from './Pages/Root.jsx'
import Description from './Pages/Description.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <Root />
</BrowserRouter>

)
