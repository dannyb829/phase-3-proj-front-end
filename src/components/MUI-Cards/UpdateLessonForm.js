import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function UpdateLessonForm({ id, title, setLessons }) {
  const [open, setOpen] = React.useState(false);
  const [updateForm, setUpdateForm] = React.useState({
    title: '',
    content: '',
    structure:''
  });


  const handleChange = (event) => {
    setUpdateForm(prev => ({...prev, [event.target.name]: event.target.value}));
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const handleSubmit = () => {
    fetch(`http://localhost:9292/lessons/${id}`,{
      method: 'PATCH',
      headers:{'Content-Type':'application/json'},
      body: JSON.stringify(updateForm)})
      .then(resp => resp.json())
      .then(lesson => setLessons(prev => prev.map(l => {
        if (l.id === id) return lesson
        else return l
      }))
      )
    handleClose()  
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit this lesson
      </Button>
      <Dialog id='my-form' open={open} onClose={handleClose} onSubmit={console.log}>
        <DialogTitle>Update {title}</DialogTitle>
        <DialogContent>
          <TextField
            style={{marginBottom:'1em'}}
            autoFocus
            margin="dense"
            id="name"
            label="Lesson Title"
            type="email"
            name='title'
            fullWidth
            variant="standard"
            value={updateForm.title}
            onChange={handleChange}
          />
          <TextField
            style={{bottom: '1em'}}
            margin="dense"
            id="name"
            label="Lesson Content"
            type="email"
            name='content'
            fullWidth
            variant="standard"
            value={updateForm.content}
            onChange={handleChange}
          />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={updateForm.structure}
              label="Age"
              name='structure'
              value={updateForm.structure}
              onChange={handleChange}
            >
              <MenuItem value='group' >Group</MenuItem>
              <MenuItem value='private' >Private</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type='submit' form='my-form' onClick={handleSubmit}>Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}