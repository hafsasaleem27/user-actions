import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Card from "../UI/Card/Card";
import ErrorModal from "../UI/ErrorModal/ErrorModal";
import styles from "./AddUser.module.css";

const AddUser = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const addUserHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim() === "" || enteredAge.trim() === "") {
      setIsModalOpen(true);
      return;
    }
    if (+enteredAge < 1) {
      setIsModalOpen(true);
      return;
    }

    console.log(enteredName, enteredAge);
    props.onAddUser(enteredName, enteredAge);
    setEnteredName("");
    setEnteredAge("");
  };

  const nameHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const closeErrorModal = () => setIsModalOpen(false);

  return (
    <div>
      {isModalOpen && (
        <ErrorModal
          title="An error occured!"
          message="Something went wrong!"
          onClick={closeErrorModal}
        />
      )}
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
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
