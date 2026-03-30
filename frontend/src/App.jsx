import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Header from './components/Header';
import Footer from './components/Footer';
import Sidebar from './components/Sidebar';
import Dashboard from './pages/Dashboard';
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
                    </div>

                  </div>

              
                  <Footer />
                </div>
        </div>
   
 

  );
}
export default App;
