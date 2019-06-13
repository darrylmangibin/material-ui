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

const Exercises = ({ 
  exercises, 
  category, 
  onSelect, 
  exercise: {
    id,
    title = 'Welcome',
    description = 'Please select an exercise from the list on the left pane.'
  } 
}) => {
  return (
    <Grid container spacing={1} style={{width: '100%'}}>
      <Grid item sm>
        <Paper style={styles.Paper}>
          {exercises.map(([group, exercises]) => {
            return !category || category === group ? (
              <React.Fragment key={group}>
                <Typography variant="h5" style={{ textTransform: 'capitalize' }}>
                  {group}
                </Typography>
                <List component="ul">
                  {exercises.map(({ title, id }) => {
                    return (
                      <ListItem key={title} button
                        onCLick={() => onSelect(id)}
                      >
                        <ListItemText 
                          primary={title} 
                        />
                      </ListItem>
                    )
                  })}
                </List>
              </React.Fragment>
            ) : null
          })}
        </Paper>
      </Grid>
      <Grid item sm>
        <Paper style={styles.Paper}>
          <Typography
            variant="h4"
          >
            {title}
          </Typography>
          <Typography variant="subtitle1" style={{ marginTop: 20 }}>
            {description}
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Exercises;