// import { useEffect, useState } from "react";
import DogCard from "./MUI-Cards/DogCard"
import { Grid, Stack, Typography } from '@mui/material'

function DoggoList({ doggos, trainers }) {

    const itemToDisplay = doggos.map(doggo => (
        <Grid key={doggo.id} item xs={3}>
            <DogCard trainers={trainers} id={doggo.id} name={doggo.name} age={doggo.age} breed={doggo.breed} image={doggo.image}></DogCard>
        </Grid>
    ))

    return (
        <>
            <Grid item sm={12}>
                <Typography style={{ fontSize: "1.5rem" }}>Dogs In Training</Typography>
            </Grid>
            <Stack direction='row'>
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>
        </>
    )
}

export default DoggoList