// import { useEffect, useState } from "react";
import DogCard from "./MUI-Cards/DogCard"
import {Grid, Stack} from '@mui/material'

function DoggoList({doggos, trainers}) {

    const itemToDisplay = doggos.map(doggo => (
        <Grid item xs={3}>
            <DogCard key={doggo.id} trainers={trainers} id={doggo.id} name={doggo.name} age={doggo.age} breed={doggo.breed}></DogCard>
        </Grid>
    ))

    return (
        <>
            <h2>Doggo list here</h2>
            <Stack direction='row'>
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>
        </>
    )
}

export default DoggoList