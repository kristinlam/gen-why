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
    link: '',
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
      sx={{
        minWidth: '100%',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <Grid
        item
        sx={{
          background: 'rgba(255,255,255, 0.95)',
          boxShadow: '0 0.5rem 1rem rgba(0, 0, 0, .5)',
          p: 4,
          borderRadius: 2,
        }}
      >
        <Typography variant="h3" color="#a3a380" align="center" mb={1}>
          Suggest a Story
        </Typography>
        <Typography variant="body1">
          Are we missing any of your favorite, most absurd stories? Let's fix
          that.
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
          sx={{ display: 'flex', flexDirection: 'column' }}
        >
          <TextField
            name="name"
            placeholder="Name"
            type="text"
            value={formValues.name}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <TextField
            name="link"
            placeholder="Link"
            type="text"
            value={formValues.link}
            onChange={handleChange}
            variant="outlined"
            size="small"
          />
          <Button
            sx={{ alignSelf: 'center', mt: 1 }}
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
