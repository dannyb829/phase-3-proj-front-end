import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ExpandMore from '@mui/icons-material/ExpandMore';




const bull = (
    <Box
        component="span"
        sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
        •
    </Box>
);

export default function AppointmentCard({ date, lesson, dogName }) {
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };



    return (
        <Card sx={{ minWidth: 275, maxWidth: 275 }}>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    Your Appt on..
                </Typography>
                <Typography variant="h5" component="div">
                    {date}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant='h5' color="text.secondary">
                    {lesson.title}
                </Typography>
                <Typography variant="body2">
                    {dogName}
                </Typography>
            </CardContent>
            <CardActions>
                {/* <Button size="small">Contact owner</Button> */}
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={<ExpandMore />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '100%', flexShrink: 0 }}>
                            Contact Owner
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            1-243-534-3255
                        </Typography>
                    </AccordionDetails>
                    <Button>Cancel Appt</Button>
                </Accordion>
            </CardActions>
        </Card>
    );
}