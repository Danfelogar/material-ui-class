import React from 'react'
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';


export const ListDriver = () => {
    return (
        <div>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <Box sx={{ my: 3, mx: 2 }}>
                    <Grid container alignItems="center">
                    <Grid item xs>
                        <Typography gutterBottom variant="h4" component="div">
                        Toothbrush
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography gutterBottom variant="h6" component="div">
                        $4.50
                        </Typography>
                    </Grid>
                    </Grid>
                    <Typography color="text.secondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                    just down the hall.
                    </Typography>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ m: 2 }}>
                    <Typography gutterBottom variant="body1">
                    Select type
                    </Typography>
                    <Stack direction="row" spacing={1}>
                    <Chip label="Extra Soft" />
                    <Chip color="primary" label="Soft" />
                    <Chip label="Medium" />
                    <Chip label="Hard" />
                    </Stack>
                </Box>
                <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
                    <Button>Add to cart</Button>
                </Box>
            </Box>
                <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
                >
                <ListItem>
                    <ListItemText primary="Photos" secondary="Jan 9, 2014" />
                </ListItem>
                <Divider component="li" />
                <li>
                    <Typography
                    sx={{ mt: 0.5, ml: 2 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                    >
                    Divider
                    </Typography>
                </li>
                <ListItem>
                    <ListItemText primary="Work" secondary="Jan 7, 2014" />
                </ListItem>
                <Divider component="li" variant="inset" />
                <li>
                    <Typography
                    sx={{ mt: 0.5, ml: 9 }}
                    color="text.secondary"
                    display="block"
                    variant="caption"
                    >
                    Leisure
                    </Typography>
                </li>
                <ListItem>
                    <ListItemAvatar>
                    <Avatar>
                        <BeachAccessIcon />
                    </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Vacation" secondary="July 20, 2014" />
                </ListItem>
            </List>
        </div>
    )
}
