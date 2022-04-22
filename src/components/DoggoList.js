// import { useEffect, useState } from "react";
import DogCard from "./MUI-Cards/DogCard"
import {Grid, Stack} from '@mui/material'

function DoggoList({doggos, trainers}) {

    const itemToDisplay = doggos.map(doggo => (
        <Grid  key={doggo.id} item xs={3}>
            <DogCard trainers={trainers} id={doggo.id} name={doggo.name} age={doggo.age} breed={doggo.breed} image={doggo.image}></DogCard>
        </Grid>
    ))

    return (
        <>
            <h2>Dogs in training</h2>
            <Stack direction='row'>
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>
        </>
    )
}

export default DoggoList