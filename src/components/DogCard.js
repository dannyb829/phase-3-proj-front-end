import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const InfoCard = ({name , age, breed}) => {

  return (
    <Card variant= "outlined" sx={{ maxWidth: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFlaC6XAwdWHsrVlcAXeiDbdRwAUrXptX8JA&usqp=CAU"
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
        <Button size="small" color="primary">
          View upcoming lessons
        </Button>
      </CardActions>
    </Card>
  );
}


export default InfoCard