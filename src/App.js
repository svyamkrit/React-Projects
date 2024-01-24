// import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextInput from "./Components/TextInput";
import Alert from "./Components/Alert";
import About from "./Components/About";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);


  const showAlert = (message, type)=> {
        setAlert(
          {message: message,
          type : type}
        )

        setTimeout(() => {
          setAlert(null)
        }, 1500);
  }

  const toggleMode = ()=> {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor ='#040015';
      showAlert("Dark Mode has been enabled", "success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
      showAlert("Light Mode has been enabled", "success")
    }
  }

  
 
  
 

  return (
    
      <BrowserRouter>
      <Navbar title="TextUtils"  mode= {mode} toggleMode= {toggleMode} />

<div className="alert-box">
<Alert alert={alert}/>
</div>



<Routes>
    <Route path="/" element={<div className="container my-3" >
      <TextInput heading= 'Try TextUtils - Word Counter | Character Counter | Remove Extra Spaces' mode= {mode}/>
      </div>}>
        </Route>

    <Route path="/about" element={<About mode={mode} />}>
      
    </Route>
  </Routes>

  </BrowserRouter> 

  );
}

export default App;
