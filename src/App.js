import { AppBar } from '@mui/material';
import './App.css';

//mi navbar o menu
import MiMenu from "./components/navbar/navbar";
//en Boxsx está el banner
import BoxSx from "./components/header/header";
//cards
import MiCard from "./components/card/card";




function App() {
  return (
    <div className="App">
      <header className="App-header">              
        <BoxSx />
        <MiMenu />  
        <MiCard />  
        <MiCard /> 
       
      
     </header>
    </div>
  );
}

export default App;
