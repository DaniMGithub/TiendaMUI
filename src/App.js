import { AppBar } from '@mui/material';
import './App.css';

//mi navbar o menu
import MiMenu from "./components/navbar/navbar";
//en Boxsx está el banner
import BoxSx from "./components/header/header";
import ImageListItem from '@mui/material/ImageListItem';




function App() {
  return (
    <div className="App">
      <header className="App-header">              
        <BoxSx />
        <MiMenu />    
      
     </header>
    </div>
  );
}

export default App;
