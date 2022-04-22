import { useEffect, useState } from "react";
import {Grid, Box, Stack} from '@mui/material'
import TrainerCard from "./MUI-Cards/TrainerCard";

function TrainerList({ user, trainers }) {
    
    useEffect(()=>{
        fetch(user.category === 'owner' ? `http://localhost:9292/trainers/${user.name}` : 'http://localhost:9292/trainers')
        .then(resp => resp.json())
        .then(console.log)
    },[])

    const itemToDisplay = trainers.map(trainer => (
        <Grid item xs={3}>
            <TrainerCard key={trainer.id} name={trainer.name} service={trainer.service}></TrainerCard>
        </Grid>
    ))

    return (
        <>
            <h2>Current Trainers</h2>
            <Stack direction='row'>
                <Grid direction='row' container spacing={3}>
                {itemToDisplay}
                </Grid>
            </Stack>
        </>
    )
}

export default TrainerList

