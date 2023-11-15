import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../Styling/AddTask.css"; 

function AddTask({ userInput, updateInput, addItem }) {
  return (
    <InputGroup className="input-group-container">
      <FormControl
        placeholder="add item . . . "
        size="lg"
        value={userInput}
        onChange={(e) => updateInput(e.target.value)}
        aria-label="add something"
        aria-describedby="basic-addon2"
      />
      <InputGroup>
        <Button className="add-button" variant="dark" onClick={addItem}>
          ADD
        </Button>
      </InputGroup>
    </InputGroup>
  );
}

export default AddTask;
