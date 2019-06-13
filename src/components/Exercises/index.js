import React from 'react';
import { Grid, Paper, Typography, List, ListItem, ListItemText } from '@material-ui/core';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Delete from '@material-ui/icons/Delete'


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
  },
  onDelete 
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
                        onClick={() => onSelect(id)}
                      >
                        <ListItemText 
                          primary={title} 
                        />
                        <ListItemSecondaryAction>
                          <IconButton
                            onClick={() => onDelete(id) }
                          >
                            <Delete />
                          </IconButton>
                        </ListItemSecondaryAction>
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