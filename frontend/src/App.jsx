import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';

import { createRoot } from 'react-dom/client'

  function App()
{

  return(
    
        <div className="row">
          <div className="col">
           
                  <Header />

               
                  <div style={{display: "flex"}}>

             
                    <Sidebar />

                
                    <div style={{padding: "20px", width: "100%"}}>
                      <Dashboard />
                      
                      <Test  />
                    </div>

                  </div>

              
                  <Footer />
                </div>
        </div>
   
 

   
  );
}
function Test() {
  const[value, setValue] = useState(100);
  function handleChnage()
  {
      const total = value -1;
      setValue(total);
  }
    return(
      <div>
        <h1>Strting Value is {value}</h1>
        <button onClick={handleChnage}>Decrease value</button>
      </div>
    );

  }

export default App;