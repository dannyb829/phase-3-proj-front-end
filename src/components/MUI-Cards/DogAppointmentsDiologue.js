import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { List, ListItem, ListItemText } from '@mui/material';




export default function DogAppointments({ id, trainers }) {
    const [open, setOpen] = React.useState(false);
    const [apps, setApps] = React.useState([])

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };




    React.useEffect(() => {
        fetch(`http://localhost:9292/upcoming-appointments/${id}`)
            .then(resp => resp.json())
            .then(apps => setApps(apps))
    }, [])



    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen}>
                View upcoming lessons
            </Button>
            <Dialog id='my-form' sx={{margin:'auto', maxHeight:400, overflow:'clip'}} open={open} onClose={handleClose} onSubmit={console.log}>
                <DialogTitle>Upcoming Appointments</DialogTitle>
                <DialogContent>
                    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                        {apps.map((a) => (
                            <ListItem
                                key={a.id}
                                disableGutters
                            >
                                <ListItemText primary={`Appt. on ${a.date} with ${trainers.find((t)=> t.id === a.lesson.trainer_id).name}`} />
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose}>Close</Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}