import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSubject } from '../store/singleSubject';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

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
    <Container>
      <Typography variant="h1">Suggest a Story</Typography>
      <Typography variant="body1">
        Are we missing any of your favorite, most absurd stories? Let's fix
        that.
      </Typography>

      <form onSubmit={handleSubmit} noValidate autoComplete="off">
        <TextField
          name="name"
          label="Subject"
          type="text"
          value={formValues.name}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="title"
          label="Title"
          type="text"
          value={formValues.title}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="link"
          label="Link"
          type="text"
          value={formValues.link}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <TextField
          name="source"
          label="Source"
          type="text"
          value={formValues.source}
          onChange={handleChange}
          variant="outlined"
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default CreateSubject;
