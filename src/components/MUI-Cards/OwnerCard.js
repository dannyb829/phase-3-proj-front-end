import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const OwnerCard = ({name , address}) => {

  return (
    <Card variant= "outlined" sx={{ maxWidth: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://i.pinimg.com/originals/0e/2e/9d/0e2e9dc33751fbf4a708c1ecbdaf2d43.png"
          alt="Funny guy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Address {address}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Contact
        </Button>
      </CardActions>
    </Card>
  );
}


export default OwnerCard