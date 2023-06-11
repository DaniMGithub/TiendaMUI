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
      <div>
             <img className="ui medium circular image fotoHeader2" src="https://images.unsplash.com/photo-1617049690922-2014b68ee066?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
      </div>
      <row>
      <div>
            <img className="ui medium circular image fotoHeader" src="https://images.unsplash.com/photo-1559582125-d397e59103f0?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max"/>
      </div>    
      <div>
            <img className="ui medium circular image fotoHeader3" src="https://images.unsplash.com/photo-1584873564166-f69123e2083e?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
      </div>
      <div>
            <img className="ui medium circular image fotoHeader4" src="https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?ixlib=rb-4.0.3&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max" />
      </div>    
  
      </row>
      <div>
            <h1 className='titulo'>Viajando<AirplaneTicketIcon></AirplaneTicketIcon></h1>
      </div>
    </Box>    
    </React.Fragment>
  );
}

export default BoxSx;


