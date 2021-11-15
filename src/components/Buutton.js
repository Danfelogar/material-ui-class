import React from 'react';
import Button from '@mui/material/Button';

export const Buutton = () => {
    return (
        <div>
            <Button variant="text" color="secondary">
                daniel
            </Button>
            <Button variant="outlined" color="primary">
                daniel
            </Button>
            <Button variant="contained" color="error">
                daniel
            </Button>
            <Button variant="contained" disableElevation color="error">
                daniel
            </Button>
            <Button variant="outlined" fullWidth href='https://www.google.com/' color="primary">
                google
            </Button>
        </div>
    )
}
