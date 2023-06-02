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
        <BoxSx />
        <MiMenu />

        
     </header>
    </div>
  );
}

export default App;
