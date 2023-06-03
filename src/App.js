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
       
       </header>
        <div className='Body'>
            <MiCard 
            name="Verano en La Rioja"
            date="Enero 2023"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/pHANr-CpbYM/800x600"            
            />  
            <MiCard 
            name="Invierno en Mendoza"
            date="Julio 2023"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/uOi3lg8fGl4/800x600"            
            />  
            <MiCard 
            name="Puerto Madryn"
            date="Todo el año"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/t20pc32VbrU/800x600"            
            />  
        </div>
    </div>
  );
}

export default App;
