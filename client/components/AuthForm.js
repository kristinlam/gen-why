import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authenticate } from '../store';

const AuthForm = ({ name, displayName }) => {
  const error = useSelector((state) => state.auth.error);
  const dispatch = useDispatch();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const formName = evt.target.name;
    const username = evt.target.username.value;
    const password = evt.target.password.value;
    dispatch(authenticate(username, password, formName));
  };

  return (
    <div className="px-6 flex items-center justify-center h-screen">
      <div className="bg-white w-screen md:w-1/2 lg:w-1/3 flex flex-col rounded-3xl py-14 px-12">
        <h1 className="text-center mb-10">
          {name === 'login' ? 'Admin Login' : "Let's get started!"}
        </h1>

        <form className="flex flex-col" onSubmit={handleSubmit} name={name}>
          <input
            className="w-full mb-3 border-2 border-gray p-3 rounded-md focus:outline-none focus:border-black"
            name="username"
            placeholder="Username"
            type="text"
          />
          <input
            className="w-full mb-3 border-2 border-gray p-3 rounded-md focus:outline-none focus:border-black"
            name="password"
            placeholder="Password"
            type="password"
          />
          <button
            className="bg-yellow rounded-lg block w-full p-3 font-medium"
            type="submit"
          >
            {displayName}
          </button>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
    </div>
  );
};

export const Login = () => <AuthForm name="login" displayName="Login" />;
export const Signup = () => <AuthForm name="signup" displayName="Sign Up" />;
