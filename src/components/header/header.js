import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import "./header.css";

const BoxSx = () => {
  return (    
<React.Fragment>
      <Box className="cajaHeader" sx={{ 
        flexGrow: 1,
        display: 'flex',
       alignItems: 'center',
        textAlign: 'center',
        width: 1200,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
        backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],          
        }, }}>
      <img className="ui medium circular image" src="http://placekitten.com/300/300"/>      
      <h1 className='titulo'>La tienda</h1>,
    </Box>
    
    </React.Fragment>
  );
}

export default BoxSx;


