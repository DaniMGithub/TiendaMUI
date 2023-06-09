import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./card.css";
import { Container } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';


const MiCard = (props) => {
  return (
    <Container className='contenedorCards'>     
    <Card sx={{ maxWidth: 300 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={props.img}
        alt={props.name}      
        
      />
      <CardContent className='cartaContenido'>
        <Typography gutterBottom variant="h5" component="div">
          {props.name}
        </Typography>
        <Typography variant="h8" color="black">
          {props.date}
        </Typography>
        <Typography variant="body2" color="black">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>    
        <Button variant="contained">Más info<FlightTakeoffIcon></FlightTakeoffIcon></Button>
        <Button variant="contained"><AddShoppingCartIcon></AddShoppingCartIcon></Button>
      </CardActions>
    </Card>
    </Container>
  );
}
export default MiCard;