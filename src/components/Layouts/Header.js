import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import Create from '../Exercises//Dialogs/Create';



const Header = ({ muscles, onExerciseCreate }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography style={{ flex: 1 }} variant="h5" color="inherit">
          Exercise
        </Typography>
        <Create 
          muscles={muscles}
          onCreate={onExerciseCreate}
        />
      </Toolbar>
    </AppBar>
  )
}

export default Header;