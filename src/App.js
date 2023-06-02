import { AppBar } from '@mui/material';
import './App.css';

import MiMenu from "./components/navbar/navbar";
import BoxSx from "./components/header/header";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          tienda MUI
        </p>
       <img class="ui medium circular image gatito" src="http://placekitten.com/100/100"></img>
        <BoxSx />
        <MiMenu />

        
     </header>
    </div>
  );
}

export default App;
