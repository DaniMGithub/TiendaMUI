import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import ImageListItem from '@mui/material/ImageListItem';
import "./header.css";
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

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
      <img className="ui medium circular image" src="https://images.unsplash.com/photo-1435783099294-283725c37230?crop=entropy&cs=tinysrgb&fit=crop&fm=jpg&h=300&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4NTc1NDg2MA&ixlib=rb-4.0.3&q=80&w=800"/>      
      <h1 className='titulo'>Viajando<AirplaneTicketIcon></AirplaneTicketIcon></h1>
      
    </Box>    
    </React.Fragment>
  );
}

export default BoxSx;


