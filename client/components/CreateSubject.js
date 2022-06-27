import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSubject } from '../store/singleSubject';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const CreateSubject = () => {
  const dispatch = useDispatch();

  const defaultValues = {
    name: '',
    title: '',
    link: '',
    source: '',
  };
  const [formValues, setFormValues] = useState(defaultValues);

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(createSubject(formValues));
    setFormValues(defaultValues);
  };

  return (
    <Grid
      justify="center"
      alignItems="center"
      direction="column"
      spacing={5}
      sx={{
        minWidth: '100%',
        minHeight: '90vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        sx={{ background: 'rgba(255,255,255, 0.95)', p: 5, borderRadius: 3 }}
      >
        <Typography variant="h3">Suggest a Story</Typography>
        <Typography variant="body1">
          Are we missing any of your favorite, most absurd stories? Let's fix
          that.
        </Typography>
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            name="name"
            label="Name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <TextField
            name="title"
            label="Title"
            type="text"
            value={formValues.title}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <TextField
            name="link"
            label="Link"
            type="text"
            value={formValues.link}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <TextField
            name="source"
            label="Source"
            type="text"
            value={formValues.source}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <Button
            sx={{ alignSelf: 'flex-start' }}
            variant="contained"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreateSubject;
