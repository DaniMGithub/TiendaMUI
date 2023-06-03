import { AppBar } from '@mui/material';
import './App.css';

//mi navbar o menu
import MiMenu from "./components/navbar/navbar";
//en Boxsx está el banner
import BoxSx from "./components/header/header";
//cards
import MiCard from "./components/card/card";
//Footer
import Footer from "./components/footer/footer";
//cardWidget
import CardWid from "./components/cardw/cardw";
//greeting de ItemListContainer
import ItemListContainer from "./components/itemListC/itemListC";



function App() {
  return (
    <div className="App">
      <header className="App-header">   
        <CardWid />                  
        <BoxSx />        
        <MiMenu /> 
       
       
       </header>
        <div className='Body'>
            <MiCard 
            name="Talampaya"
            date="Enero 2023"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/pHANr-CpbYM/800x600"            
            />  
            <MiCard 
            name="Ruta del Vino"
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
        <div className='Body'>
            <MiCard 
            name="Cerro Tronador"
            date="Julio 2024"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/2Bjq3A7rGn4/800x600"            
            />  
            <MiCard 
            name="Bosque de Arrayanes"
            date="Todo el año"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/9O1oQ9SzQZQ/800x600"            
            />  
            <MiCard 
            name="Volcan Tonga"
            date="Suspendido"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            img="https://source.unsplash.com/E4944K_4SvI/800x600"            
            />              
        </div>

        <footer>
          <Footer />
          <ItemListContainer greeting="Buen fin de semana a todos!" />
        </footer>
    </div>
  );
}

export default App;
