import { Person } from '@mui/icons-material';
import { makeStyles } from '@mui/styles';
import { Button } from '@mui/material';
import React from 'react';

// import { Buutton } from './components/Buutton';
// import { BuuttonGroup } from './components/BuuttonGroup';
// import { Checkboxx } from './components/Checkboxx';
// import { FloatingactionButton } from './components/FloatingactionButton';
// import { Radiobutton } from './components/Radiobutton';
// import { Raating } from './components/Raating';
// import { Seleccted } from './components/Seleccted';
// import { Swwitch } from './components/Swwitch';
// import { Avvatar } from './components/Avvatar';
// import { ListDriver } from './components/ListDriver';
// import { Iconos } from './components/Iconos';
// import CustomPaginationActionsTable from './components/Tabbles';
// import { AppBarr } from './components/AppBar';

const useStyles = makeStyles((theme)=>({
  button:{
    backgroundColor:"#3333",
    color:"white",
  },
}));

export const App = () => {

  const classes = useStyles();

  return (
    <div>
      <Button
      variant="contained"
      size="small"
      startIcon={ <Person /> }
      className={classes.button}
      >
        Material UI
      </Button>
    </div>
  )
}

