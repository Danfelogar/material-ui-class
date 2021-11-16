import React from 'react';

import { ImageCard } from './components2/ImageCard';
import { ThemeProvider } from '@mui/material';
import { theme } from './assets/theme';
import { Box } from '@mui/system';

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

export const App = () => {
  return (
    <ThemeProvider theme={theme} >
      <div>
        <Box sx={{flexGrow: 1 }}>
          <ImageCard />
        </Box>
      </div>
    </ThemeProvider>
  )
}

