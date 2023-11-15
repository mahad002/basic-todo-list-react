import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import TaskItem from "./TaskItem";
import "../Styling/TaskList.css"; 

function TaskList({ tasks, deleteItem }) {
  return (
    <ListGroup className="list-group-container">
      {tasks.map((item) => (
        <TaskItem key={item.id} item={item} deleteItem={deleteItem} />
      ))}
    </ListGroup>
  );
}

export default TaskList;
