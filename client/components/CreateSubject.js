import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSubject } from '../store/singleSubject';

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
    <div>
      <p>
        Are we missing any of your favorite, most absurd stories? Let's fix
        that.
      </p>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          type="text"
          value={formValues.name}
          onChange={handleChange}
        />
        <input
          name="link"
          placeholder="Link"
          type="text"
          value={formValues.link}
          onChange={handleChange}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default CreateSubject;
