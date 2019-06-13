import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';

const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: 500,
    overflowY: 'scroll'
  }
}

const Exercises = ({ exercises }) => {
  return (
    <Grid container spacing={1}>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            return (
              <React.Fragment key={group}>
                <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title }) => {
                    return (
                      <ListItem key={title} button>
                        <ListItemText primary={title} />
                      </ListItem>
                    )
                  })}
                </List>
              </React.Fragment>
            )
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography
            variant="h4"
          >
            Welcome!
          </Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            Please select an exercise from the list on the left pane.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises;