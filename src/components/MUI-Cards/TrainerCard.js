import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMore from '@mui/icons-material/ExpandMore';

const TrainerCard = ({name , service}) => {

  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
};


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
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Contact Trainer
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1-347-555-5555
                        </Typography>
                    </AccordionDetails>
                </Accordion>
      </CardActions>
    </Card>
  );
}


export default TrainerCard