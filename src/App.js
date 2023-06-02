import { AppBar } from '@mui/material';
import './App.css';

import MiMenu from "./components/navbar/navbar";
import Bar from "./components/Bar/bar";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          tienda MUI
        </p>
        <MiMenu />
        <Bar />
     </header>
    </div>
  );
}

export default App;
