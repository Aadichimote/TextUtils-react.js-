
import { useState } from 'react';
import Navbar from './Component/Navbar';
import Textbox from './Component/Textbox';
import Aleart  from './Component/Alert';
function App() {
  let [mode , setmode] = useState(`light`);
  let [alert , setAlert] = useState(null);
  
  let showAlert = (Message, type) =>{
    setAlert({
      msg :Message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

   
  let toggleMOde = ()=> {
    if(mode === `light`){
      setmode( `dark`);
      document.body.style.backgroundColor='rgb(5 39 58)';
      document.body.style.color='white';
      showAlert ("Dark mode enabled", "Sucess");       
    }else{
      setmode(`light`);  
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
      showAlert ("light mode enabled", "Sucess");
    }

  }
  return (
     
    <> 
   <Navbar title= "TextUtils" NavText="Home"   mode={mode}  toggleMOde={toggleMOde} changeMode={mode===`light`? `dark `:`light`} />
   <Aleart   alert= {alert}/>
   
   <Textbox  showAlert={showAlert} label="enter your text here" mode= {mode}/>

    </>
  );
}

export default App;
