import { useState } from 'react'
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Typography, Button, Grid, Stack } from '@mui/material';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const emptyLesson = {
    title: "",
    content: '',
    structure: "",
    trainer: ""
}

function LessonForm({ options, setLessons }) {
    const [newLesson, setNewLesson] = useState(emptyLesson)

    function handleLessonForm(e) {
        setNewLesson({ ...newLesson, [e.target.name]: e.target.value })
    }



    function handleLessonSubmit(e) {
        e.preventDefault()
        fetch('http://localhost:9292/lessons', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newLesson)
        })
            .then(resp => resp.json())
            .then(lesson => setLessons(prev => [...prev, lesson]))
        setNewLesson(emptyLesson)
        alert('lesson created!')
    }


    return (
        
        <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>

            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' }, display: "flex"
                }}
                noValidate
                autoComplete="off"
                id='new-lesson-form'

            >

                <div>
                <Grid container spacing={1}>
                <Grid item sm={8} >
                    <Typography style={{ fontSize: "2rem" }}>Create a New Lesson</Typography>
                </Grid>
                </Grid>
                    <Grid container spacing={3}>
                        <Grid item sm={4}>
                            <FormControl sx={{ m: 1, minWidth: 120 }}>
                                <InputLabel id="demo-simple-select-helper-label">Trainer</InputLabel>
                                <Select
                                    labelId="demo-simple-select-helper-label"
                                    id="demo-simple-select-helper"
                                    label="trainer"
                                    name='trainer'
                                    onChange={handleLessonForm}
                                    defaultValue='DEFAULT'
                                    value={newLesson.trainer}
                                    // style={{ backgroundColor: "#88aacf" }}
                                >
                                    {options}
                                </Select>
                                {/* <FormHelperText>Trainer</FormHelperText> */}
                            </FormControl>
                        </Grid>

                        <Grid item sm={4}>
                            <TextField
                                id="filled-multiline-flexible"
                                label="Title"
                                multiline
                                maxRows={4}
                                variant="filled"
                                name='title'
                                onChange={handleLessonForm}
                                value={newLesson.title}
                                // style={{ backgroundColor: "#88aacf" }}
                            />
                        </Grid>

                        <Grid item sm={4}>
                            <TextField
                                id="filled-textarea"
                                label="Structure"
                                placeholder="Placeholder"
                                multiline
                                variant="filled"
                                name='structure'
                                onChange={handleLessonForm}
                                value={newLesson.structure}
                                // style={{ backgroundColor: "#88aacf" }}
                                
                            />
                        </Grid>
                    </Grid>

                    <Grid item  justifyContent='center' >
                        <TextField
                            style ={{width: '100%', color: "white"}}
                            // in style if needed backgroundColor: "#88aacf",
                            id="filled-multiline-static"
                            label="Content"
                            multiline
                            rows={4}
                            defaultValue="Content"
                            variant="filled"
                            name='content'
                            onChange={handleLessonForm}
                            value={newLesson.content}
                        />
                    </Grid>


                    <Grid item sm={4}>
                        <Button variant="contained" onClick={handleLessonSubmit} style={{ backgroundColor: "#3bb611" }}>Submit</Button>
                    </Grid>
                </div>
            </Box>
        </Grid>
    
    )
}

export default LessonForm