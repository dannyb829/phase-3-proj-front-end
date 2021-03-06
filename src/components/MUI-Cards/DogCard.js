import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import DogAppointments from './DogAppointmentsDiologue';


const DogCard = ({ id, name , age, breed, trainers, image }) => {

  return (
    <Card variant= "outlined" sx={{ maxWidth: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="Dog in a snood"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {name} is a beautiful {age} year old {breed}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <DogAppointments id={id} trainers={trainers}/>
      </CardActions>
    </Card>
  );
}


export default DogCard