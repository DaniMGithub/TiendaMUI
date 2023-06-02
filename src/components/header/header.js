import * as React from 'react';
import Box from '@mui/material/Box';


const BoxSx = () => {
  return (    
<React.Fragment>
      <Box sx={{ display: 'flex',
       alignItems: 'center',
        textAlign: 'center',
        width: 1200,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
        backgroundColor: 'primary.main', opacity: [0.9, 0.8, 0.7],          
        }, }}>
      <img class="ui medium circular image" src="http://placekitten.com/300/300"></img>
    </Box>
    </React.Fragment>
  );
}

export default BoxSx;


