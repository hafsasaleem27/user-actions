import React from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Your name</label>
        <input id="username" type="text" />
        <label htmlFor="age">Your age</label>
        <input id="age" type="number" />
        <Button type="submit">
            Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
