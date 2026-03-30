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
                      
                      <NewForm  />
                    </div>

                  </div>

              
                  <Footer />
                </div>
        </div>
   
 

   
  );
}


function NewForm(){

  const [text, setText] = useState("");

  function nitin(e){
    setText(e.target.value);
  }

  function actionFun(e){
     e.preventDefault();
      alert(text); 
  }

  return (
    <form onSubmit={actionFun}>
      <label htmlFor=""> type your text</label>
      <textarea value={text} onChange={nitin}></textarea>
      <input type="submit" name="" id="" />
    </form>
  );
}

export default App;