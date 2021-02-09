import './App.css';
import React ,{useRef}from 'react';
import './index.css';
import Navbars from './components/Navbar'
import 'bootstrap/dist/css/bootstrap.css';
import Lefty from './components/left';
import Righty from './components/right';
import { Button } from 'react-bootstrap';
import { useReactToPrint } from 'react-to-print';
import '../src/components/Forms/form.css';
import { FaPrint } from 'react-icons/fa';
function App() {
 
  return (
    <div className="App">
      <Navbars />
      <div className="containers">
        <div class="item1">
        <Lefty />
        </div >
        <div >
          <Righty />
        </div>
       
      
      </div>
    </div>

  )
}

export default App;
