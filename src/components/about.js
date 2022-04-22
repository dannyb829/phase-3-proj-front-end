import { useNavigate } from 'react-router-dom'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function About() {

  const navigate = useNavigate()

  return ( <div id='about-page' style={{ height:'100vh', textAlign:'center'}}>
        <Card sx={{ margin:'auto',position:'relative', top:'3em', maxWidth: 800 }}>
      <CardMedia
        component="img"
        height="550"
        image='/images/tough-dog.png'
        alt="green iguana"
      />
      <CardContent sx={{textAlign:'center'}}>
        <Typography gutterBottom variant="h5" component="div">
        Hey There!
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Here at Dog 101 we value the loving relationships between owners and their beautiful dogs! 
        Bring out the best in you pup with our top of the line training courses specially designed to bring your dog to physical excellence. 
        Whether he/she needs a bit of obedience training or to work on agility etc. We are here to help!
        Web Design by Sarah and Daniel.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=> navigate('/')}>Manage your account</Button>
      </CardActions>
    </Card>
    </div>
  )
}

export default About