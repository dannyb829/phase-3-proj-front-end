// import { useEffect, useState } from "react";
import InfoCard from "./DogCard"
import {Grid, Box, Stack} from '@mui/material'

function DoggoList({doggos, setDoggos}) {

    const itemToDisplay = doggos.map(doggo => (
        <Grid item xs={3}>
            <InfoCard key={doggo.id} name={doggo.name} age={doggo.age} breed={doggo.breed}></InfoCard>
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