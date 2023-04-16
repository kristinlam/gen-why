import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createSubject } from '../store/singleSubject';
import { Link } from 'react-router-dom';

const SuggestForm = () => {
  const defaultValues = {
    name: '',
    link: '',
  };

  const [formValues, setFormValues] = useState(defaultValues);
  const [errorMsg, setErrorMsg] = useState(null);
  const [successStatus, setSuccessStatus] = useState(false);
  const dispatch = useDispatch();

  const handleChange = (evt) => {
    setFormValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();

    dispatch(createSubject(formValues))
      .then(() => {
        setFormValues(defaultValues);
        setErrorMsg(null);
        setSuccessStatus(true);
      })
      .catch((err) => {
        setSuccessStatus(false);
        err.response.data.error
          ? setErrorMsg(err.response.data.error)
          : setErrorMsg('Request failed. Please try again.');
      });
  };

  return (
    <div className="px-6 flex items-center justify-center h-screen">
      <div className="bg-white w-screen md:w-1/2 lg:w-1/3 flex flex-col rounded-3xl py-14 px-12">
        <div className="text-center mb-8">
          <h1 className=" mb-2">Suggest an Article</h1>
          <p>
            Are we missing any of your favorite, most absurd articles? Let's fix
            that.
          </p>
        </div>

        <form className="flex flex-col mb-8" onSubmit={handleSubmit}>
          <input
            className="w-full mb-3 border-2 border-gray p-3 rounded-md focus:outline-none focus:border-black"
            name="name"
            placeholder="Topic"
            type="text"
            value={formValues.name}
            onChange={handleChange}
          />
          <input
            className="w-full mb-3 border-2 border-gray p-3 rounded-md focus:outline-none focus:border-black"
            name="link"
            placeholder="Link"
            type="text"
            value={formValues.link}
            onChange={handleChange}
          />
          <button
            className="bg-yellow rounded-lg block w-full p-3 font-medium"
            type="submit"
          >
            Submit
          </button>
          {errorMsg && (
            <div className="mt-4 text-center text-red">{errorMsg}</div>
          )}
          {successStatus && (
            <div className="mt-4 text-center text-green">
              <p>Thank you for your submission!</p>
              <p>We will review it as soon as we can.</p>
            </div>
          )}
        </form>
        <Link to="/" className="text-right">
          Go back
        </Link>
      </div>
    </div>
  );
};

export default SuggestForm;
