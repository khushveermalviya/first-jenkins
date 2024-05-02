import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Nav from './Pages/Nav.jsx';
import About from './Pages/About.jsx';
import Root from './Pages/Root.jsx';
import Slider from './Pages/Slider.jsx';
function App() {
  
  return (
   
    <BrowserRouter>
    <Root />
  </BrowserRouter>
   
  );
}

export default App;