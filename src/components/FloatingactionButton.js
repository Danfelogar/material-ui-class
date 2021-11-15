import React from 'react'
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import FavoriteIcon from '@mui/icons-material/Favorite';
import NavigationIcon from '@mui/icons-material/Navigation';
import Box from '@mui/material/Box';

export const FloatingactionButton = () => {
    return (
        <div>
            <Fab color="primary" aria-label="add">
                <AddIcon />
                </Fab>
                <Fab color="secondary" aria-label="edit">
                <EditIcon />
                </Fab>
                <Fab variant="extended">
                <NavigationIcon sx={{ mr: 1 }} />
                Navigate
                </Fab>
                <Fab disabled aria-label="like">
                <FavoriteIcon />
            </Fab>
            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                <Fab variant="extended" size="small" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" size="medium" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
                <Fab variant="extended" color="primary" aria-label="add">
                    <NavigationIcon sx={{ mr: 1 }} />
                    Extended
                </Fab>
            </Box>
        </div>
    )
}
