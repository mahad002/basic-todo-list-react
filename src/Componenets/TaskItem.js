import React from "react";
import Button from "react-bootstrap/Button";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import "../Styling/TaskItem.css";

function TaskItem({ item, deleteItem }) {
  return (
    <div>
      <ListGroupItem style={{display: "flex", justifyContent: "space-between"}} variant="dark" action className="list-group-item-container">
        {item.value}
          <Button 
          className="delete-button" 
          variant="light" 
          onClick={() => deleteItem(item.id)}
          >
            Delete
          </Button>
      </ListGroupItem>
    </div>
  );
}

export default TaskItem;
