import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSubject } from '../store/singleSubject';
import { Link } from 'react-router-dom';

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
    <div className="flex items-center	 justify-center h-screen text-2xl">
      <div className="w-1/2 flex flex-col border-green border-4 rounded-md p-10">
        <p className="mb-6">
          Are we missing any of your favorite, most absurd stories? Let's fix
          that.
        </p>

        <form className="flex flex-col mb-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="mb-2 w-full border border-green border-2 p-2 rounded-md focus:outline-none focus:border-yellow"
              name="name"
              placeholder="Name"
              type="text"
              value={formValues.name}
              onChange={handleChange}
            />
            <input
              className="border w-full border-green border-2 p-2 rounded-md focus:outline-none focus:border-yellow"
              name="link"
              placeholder="Link"
              type="text"
              value={formValues.link}
              onChange={handleChange}
            />
          </div>
          <button className="block bg-green text-cream p-2 rounded-lg">
            Submit
          </button>
        </form>
        <Link to="/" className="text-xl text-right">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default CreateSubject;
