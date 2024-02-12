
import './App.css';
import Navbar from './Component/Navbar';
import TExtbox from './Component/Navbar'
import Textbox from './Component/Textbox';
function App() {
  return (
    <> 
   <Navbar title= "TextUtils" NavText="Home" links="Links" />
   
   <Textbox label="enter your text here"/>

    </>
  );
}

export default App;
