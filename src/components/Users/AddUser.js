import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import styles from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const addUserHandler = (event) => {
    event.preventDefault();
   
    if (enteredName.trim() === '' || enteredAge.trim() === '') {
        return;
    }
    if (+enteredAge < 1) {
        return;
    }

    console.log(enteredName, enteredAge);
    setEnteredName('');
    setEnteredAge('');
  };

  const nameHandler = (event) => {
      setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
      setEnteredAge(event.target.value);
  };

  return (
    <Card className={styles.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Your name</label>
        <input 
            id="username" 
            type="text" 
            value={enteredName}
            onChange={nameHandler}
        />
        <label htmlFor="age">Your age</label>
        <input 
            id="age" 
            type="number" 
            value={enteredAge}
            onChange={ageHandler}
        />
        <Button type="submit">
            Add User
        </Button>
      </form>
    </Card>
  );
};

export default AddUser;
