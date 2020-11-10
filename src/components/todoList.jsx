import React, { useState, useEffect } from "react";
import store from "./redux/store";
import { addTodo } from "./redux/actions";
import { Button } from "react-bootstrap";

const TodoList = () => {
  const [updatedState, setUpdatedState] = useState({ counter: 0 });
  const [formActive, setFormActive] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescritpion] = useState("");
  useEffect(() => {});
  store.subscribe(() => {
    setUpdatedState(store.getState());
    console.log(store.getState());
  });
  const handleOpenForm = () => {
    setFormActive(true);
  };
  const handleAdd = () => {
    setFormActive(false);
    store.dispatch(addTodo(title, description));
  };
  const handleChange = e => {
    e.preventDefault();
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescritpion(e.target.value);
    }
  };

  return (
    <div className="container p-5">
      {!formActive && (
        <div className="d-flex justify-content-center">
          <Button
            type="button"
            className="btn btn-success rounded-circle"
            onClick={handleOpenForm}
          >
            +
          </Button>
        </div>
      )}
      {formActive && (
        <>
          <div className="input-group mb-3 d-flex justify-content-center">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                T
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Title"
              name="title"
              aria-label="Title"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>
          <div className="input-group mb-3 d-flex justify-content-center">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                D
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              placeholder="Description"
              name="description"
              aria-label="Description"
              aria-describedby="basic-addon1"
              onChange={handleChange}
            />
          </div>
          <Button
            type="button"
            className="btn btn-success rounded-circle "
            onClick={handleAdd}
          >
            Add
          </Button>
        </>
      )}
    </div>
  );
};

export default TodoList;
