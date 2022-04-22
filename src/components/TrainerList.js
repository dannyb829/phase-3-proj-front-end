import { useEffect, useState } from "react";
import {Grid, Box, Stack} from '@mui/material'
import TrainerCard from "./MUI-Cards/TrainerCard";

function TrainerList({ user, trainers }) {
    
  

    const itemToDisplay = trainers.map(trainer => (
        <Grid key={trainer.id} item xs={3}>
            <TrainerCard name={trainer.name} service={trainer.service}></TrainerCard>
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

