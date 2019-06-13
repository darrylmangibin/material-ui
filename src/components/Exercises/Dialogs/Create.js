import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { withStyles } from '@material-ui/core/styles'

const styles = (theme) => {
  return {
    FormControl: {
      width: 500
    }
  }
}

class Create extends React.Component {
  state = {
    open: false,
    exercise: {
      title: '',
      description: '',
      muscles: ''
    }
  }

  handleChange = (name, e) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: e.target.value
      }
    })
  }

  handleToggle = () => {
    this.setState({
      open: !this.state.open
    })
  }

  handleSubmit = (e) => {
    

    const { exercise } = this.state;

    this.props.onCreate({ 
      ...exercise,
      id: exercise.title.toLowerCase().replace(/ /g, '-')
     })

    this.setState({
      open: false,
      exercise: {
        title: '',
        description: '',
        muscles: ''
      }
    })
  }

  render() {
    const { open, exercise: { title, description, muscles } } = this.state;
    const { muscles: categories, classes } = this.props
    return (
      <React.Fragment>
        <Fab
          onClick={this.handleToggle} 
          variant="round" 
          size="small" 
        >
          <AddIcon />
        </Fab>
        <Dialog 
          aria-labelledby="form-dialog-title" 
          open={open}
          onClose={this.handleToggle}
        >
          <DialogTitle id="form-dialog-title">
            Create a new exercise
        </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below.
          </DialogContentText>
            <form>
              <TextField
                className={classes.FormControl}
                label="Title"
                value={title}
                onChange={(e) => this.handleChange('title', e)}
                margin="normal"
              />
              <FormControl  className={classes.FormControl}>
                <InputLabel htmlFor="muscles">
                  Muscles
                </InputLabel>
                <Select
                  value={muscles}
                  onChange={(e) => this.handleChange('muscles', e)}
                >
                  {categories.map((category) => {
                    return (
                      <MenuItem key={category} value={category}>{category}</MenuItem>
                    )
                  })}
                </Select>
              </FormControl>
              <TextField
                className={classes.FormControl}
                label="Decription"
                multiline
                rows="4"
                value={description}
                onChange={(e) => this.handleChange('description', e)}
                margin="normal"
              />
            </form>
          </DialogContent>
          <DialogActions>
            <Button 
              color="primary"
              variant="contained"
              onClick={this.handleSubmit}
            >
              Create
          </Button>
          </DialogActions>
        </Dialog>
      </React.Fragment>
    )
  }
}

export default withStyles(styles)(Create);