import React from "react";

const AddUser = (props) => {
  const addUserHandler = (event) => {
      event.preventDefault();
  };

  return (
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Your name</label>
      <input id="username" type="text" />
      <label htmlFor="age">Your age</label>
      <input id="age" type="number" />
    </form>
  );
};

export default AddUser;
