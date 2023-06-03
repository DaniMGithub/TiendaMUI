import React from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';


const CardWid = () => {
  return (
    <div>       
     <IconButton color="black" aria-label="add to shopping cart">
            <ShoppingCartIcon />
        </IconButton>               
    </div>    
  )
}

export default CardWid;