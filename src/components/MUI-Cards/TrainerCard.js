import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const TrainerCard = ({name , service}) => {

  return (
    <Card variant= "outlined" sx={{ maxWidth: "auto" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://previews.123rf.com/images/photodeti/photodeti1710/photodeti171000224/87983279-cane-divertente-di-forma-fisica-che-solleva-una-grande-testa-di-legno-pesante-come-istruttore-person.jpg"
          alt="Funny guy"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Specialty {service}
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


export default TrainerCard