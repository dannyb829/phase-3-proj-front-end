import { useEffect, useState } from "react";
import AppointmentForm from "./AppointmentForm";
import LessonForm from "./LessonForm";
import LessonList from "./LessonsList";
import AppointmentList from "./AppointmentList";
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import MenuItem from '@mui/material/MenuItem';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


function Lesson({ doggos, setDoggos, user }) {
    const [lessons, setLessons] = useState([])
    const [options, setOptions] = useState([])

    const [appointments, setAppointments] = useState([])



    useEffect(() => {
        fetch(`http://localhost:9292/lessons/${user.category}/${user.name}`)
            .then(resp => resp.json())
            .then(data => setLessons(data))
        fetch('http://localhost:9292/trainers')
            .then(resp => resp.json())
            .then(data => setOptions(data.map((t) => <MenuItem key={t.id} value={t.name}>{t.name}</MenuItem>)))
        fetch(`http://localhost:9292/upcoming-appointments/${user.category}/${user.name}`)
            .then(resp => resp.json())
            .then(setAppointments)
    }, [])



    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Item>
                        <LessonList lessons={lessons} setLessons={setLessons} user={user}/>
                    </Item>
                </Grid>
                {user.category === 'Trainer' ? (
                <Grid item xs={9} direction='row'>
                    <Item>
                        <LessonForm options={options} setLessons={setLessons} />
                    </Item>
                </Grid>) : null}
                <Grid item xs={8}>
                    <Item>
                        <AppointmentForm setAppointments={setAppointments} doggos={doggos} lessons={lessons} />
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <AppointmentList doggos={doggos} lessons={lessons} appointments={appointments} setAppointments={setAppointments} user={user}/>
                    </Item>
                </Grid>
            </Grid>

            {/* <LessonList lessons={lessons} setLessons={setLessons}/>
        <LessonForm options={options} setLessons={setLessons}/>
        <AppointmentForm doggos={doggos} lessons={lessons}/>
        <AppointmentList doggos={doggos} lessons={lessons} appointments={appointments}/> */}
        </>
    )
}

export default Lesson