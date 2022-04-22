import { useEffect, useState } from "react";
import { Grid, Box, Stack } from '@mui/material'
import OwnerCard from "./MUI-Cards/OwnerCard";

function OwnersList({ owners, setOwners }) {

    console.log(owners)

    const itemToDisplay = owners.map(owner => (
        <Grid key={owner.id} item xs={3}>
            <OwnerCard name={owner.name} address={owner.address} image={owner.image}></OwnerCard>
        </Grid>

    ))


    return (
        <>
            <h2>Dog Owners</h2>
            <Stack driection='row'>
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>
        </>
    )
}

export default OwnersList