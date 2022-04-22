import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Grid, Button } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { border, textAlign } from '@mui/system';
// import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
// import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';




// run npm install @mui/x-date-pickers

const apptForm = {
    lesson: '',
    dog: '',
    date: ''
}


function AppointmentForm({ doggos, lessons, setAppointments }) {
    const [newApptForm, setNewApptForm] = useState(apptForm)
    const [value, setValue] = React.useState('Controlled');

    function handleApptForm(e) {
        setNewApptForm({ ...newApptForm, [e.target.name]: e.target.value })
    }

    function handleFormUpdate(app) {
        setAppointments(prev => [...prev, app])
        alert('Appointment created!')
        setNewApptForm(apptForm)
    }


    function handleSubmitAppt(e) {
        e.preventDefault()
        fetch('http://localhost:9292/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newApptForm)
        })
            .then(resp => resp.json())
            .then(handleFormUpdate)
    }

    return (
        <>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
                id='sign-up-lesson'
                className='list-card'
            >

                <div>
                    <Grid container spacing={1}>
                        <Grid item sm={12}>
                            <Typography style={{ fontSize: "1.5rem" }}>Sign Up for a Lesson</Typography>
                        </Grid>
                        <Grid container spacing={1}>
                            <Grid item sm={3}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Lesson</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="lesson"
                                        name='lesson'
                                        onChange={handleApptForm}
                                        value={newApptForm.lesson}
                                        defaultValue='DEFAULT'
                                    >
                                        {lessons.map((lesson) => <MenuItem key={lesson.id} value={lesson.title}>{lesson.title}</MenuItem>)}
                                    </Select>
                                    {/* <FormHelperText>Trainer</FormHelperText> */}
                                </FormControl>
                            </Grid>

                            <Grid item sm={3}>
                                <FormControl sx={{ m: 1, minWidth: 120 }}>
                                    <InputLabel id="demo-simple-select-helper-label">Dog</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-helper-label"
                                        id="demo-simple-select-helper"
                                        label="dog"
                                        name='dog'
                                        onChange={handleApptForm}
                                        value={newApptForm.dog}
                                        defaultValue='DEFAULT'
                                    >
                                        {doggos.map((dog) => <MenuItem key={dog.id} value={dog.name}>{dog.name}</MenuItem>)}                                    </Select>
                                    {/* <FormHelperText>Trainer</FormHelperText> */}
                                </FormControl>
                            </Grid>

                            <Grid item sm={3}>
                                <input 
                                    name='date' 
                                    type='date' 
                                    onChange={handleApptForm} 
                                    value={newApptForm.date}
                                    style={{ 
                                        padding: 17, 
                                        marginTop: 9, 
                                        borderColor: "#dbdbdb", 
                                        borderWidth: "thin", 
                                        borderRadius: 5,
                                        fontFamily: 'arial',
                                        color: '#525252'}}
                                    ></input>

                                {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date"
                                    onChange={handleApptForm} 
                                    value={newApptForm.date}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider> */}
                            </Grid>

                            <Grid item sm={3} sx={{ mt: 2}}>
                                <Button variant="contained" onClick={handleSubmitAppt} style={{ backgroundColor: "#3bb611" }}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Box>
        </>
    )
}

export default AppointmentForm