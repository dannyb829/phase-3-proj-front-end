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


    function handleSubmitAppt(e) {
        e.preventDefault()
        fetch('http://localhost:9292/appointments', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newApptForm)
        })
            .then(resp => resp.json())
            .then(app => setAppointments(prev => [...prev, app]))
        e.target.reset()
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
                        <Grid item sm={8}>
                            <Typography style={{ fontSize: "2rem" }}>Sign Up for a Lesson</Typography>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item sm={4}>
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

                            <Grid item sm={4}>
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

                            <Grid item sm={4}>
                            <input name='date' type='date' onChange={handleApptForm} value={newApptForm.date}></input>

                            {/* <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    label="Date"
                                    onChange={handleApptForm} 
                                    value={newApptForm.date}
                                    renderInput={(params) => <TextField {...params} />}
                                />
                            </LocalizationProvider> */}
                            </Grid>

                        </Grid>
                    </Grid>
                    <Grid item sm={4}>
                        
                        <Button variant="contained" onClick={handleSubmitAppt} style={{ backgroundColor: "#3bb611" }}>Submit</Button>
                    </Grid>
                </div>
            </Box>




            {/* <div className='list-card'>
                <form id='sign-up-lesson' onSubmit={handleSubmitAppt}>
                    <h3>Sign up for a lesson</h3>


                    <select defaultValue='DEFAULT' name='lesson' onChange={handleApptForm} value={newApptForm.lesson}>
                        <option value='DEFAULT'>Select Lesson</option>
                        {lessons.map((lesson) => <option key={lesson.id} value={lesson.title}>{lesson.title}</option>)}
                    </select>
                    <select defaultValue='DEFAULT' name='dog' onChange={handleApptForm} value={newApptForm.dog}>
                        <option value='DEFAULT'>Select Dog</option>
                        {doggos.map((dog) => <option key={dog.id} value={dog.name}>{dog.name}</option>)}
                    </select>
                    <input name='date' type='date' onChange={handleApptForm} value={newApptForm.date}></input>
                    <input type='submit'></input>
                </form>


            </div> */}
        </>
    )
}

export default AppointmentForm