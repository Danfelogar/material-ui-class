import React from 'react';
import Grid from '@mui/material/Grid';
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import DeleteSharpIcon from '@mui/icons-material/DeleteSharp';

export const Iconos = () => {
    return (
        <div>
            <Grid item xs={8}>
                <DeleteSharpIcon />
                <DeleteForeverSharpIcon />
            </Grid>

        </div>
    )
}
