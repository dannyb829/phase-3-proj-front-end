import { useEffect, useState } from "react";
import { Grid, Box, Stack } from '@mui/material'
import OwnerCard from "./MUI-Cards/OwnerCard";

function OwnersList({ owners, setOwners }) {


    const itemToDisplay = owners.map(owner => (
        <Grid item xs={3}>
            <OwnerCard key={owner.id} name={owner.name} address={owner.address}></OwnerCard>
        </Grid>

    ))


    return (
        <>
            <h2>Owner list here</h2>
            <Stack driection='row'>
                <Grid direction='row' container spacing={4}>
                    {itemToDisplay}
                </Grid>
            </Stack>
        </>
    )
}

export default OwnersList