import React, { useState, useEffect } from "react";
import store from "./redux/store";
import { addTodo, removeTodo } from "./redux/actions";
import { Button } from "react-bootstrap";
import { initialState } from "./redux/store";

const TodoList = () => {
  const [updatedState, setUpdatedState] = useState(initialState);
  const [formActive, setFormActive] = useState(false);
  const [fieldsMissing, setFieldsMissing] = useState(false);
  const [addTodoDisable, setAddTodoDisable] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescritpion] = useState("");
  useEffect(() => {});
  store.subscribe(() => {
    setUpdatedState(store.getState());
  });
  const handleOpenForm = () => {
    setFormActive(true);
  };
  const handleAdd = () => {
    if (title && description) {
      setFormActive(false);
      let id = updatedState.todos.length + 1;
      store.dispatch(addTodo(id, title, description));
      setTitle("");
      setDescritpion("");
    } else {
      setFieldsMissing(true);
      setAddTodoDisable(true);
      setTimeout(() => {
        setAddTodoDisable(false);
        setFieldsMissing(false);
      }, 5000);
    }
  };
  const handleRemove = id => {
    setFormActive(false);
    store.dispatch(removeTodo(id));
  };
  const handleChange = e => {
    e.preventDefault();
    if (e.target.name === "title") {
      setTitle(e.target.value);
    } else {
      setDescritpion(e.target.value);
    }
  };
  const handleCloseToast = () => {
    setFieldsMissing(false);
    setAddTodoDisable(false);
  };

  return (
    <div
      className={`container  bg-light border rounded-lg p-2 mt-2 ${
        updatedState.todos.length === 0 ? "border-danger" : "border-primary"
      }`}
    >
      <h5 className="bg-dark p-2 text-light"> Sample Todo List Using Redux </h5>
      {fieldsMissing && (
        <div
          className="toast"
          style={{ position: "absolute", top: 20, right: 5, opacity: 1 }}
        >
          <div className="toast-header bg-dark text-white">
            <strong className="mr-auto">Attention</strong>
            <button
              type="button"
              className="ml-2 mb-1 close text-white"
              onClick={handleCloseToast}
              data-dismiss="toast"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="toast-body bg-light">Please fill both fields!!</div>
        </div>
      )}
      {updatedState.todos.length === 0 ? (
        <div className="alert alert-danger" role="alert">
          No Task Pending
        </div>
      ) : (
        updatedState.todos.map((todo, key) => (
          <div className="container pt-2" key={key}>
            <div className="alert alert-primary" role="alert">
              <h4>TITLE:</h4> {todo.title}
              <h4>DESCRIPTION:</h4> {todo.description}
              <hr />
              <Button
                type="button"
                className="btn btn-success rounded-circle"
                onClick={() => handleRemove(todo.id)}
              >
                Done
              </Button>
            </div>
          </div>
        ))
      )}
      {!formActive && (
        <div className="d-flex bg-dark p-2 justify-content-center">
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
        <div className="container bg-dark p-5 pt-2">
          <div className="input-group mb-3 d-flex justify-content-center ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                T
              </span>
            </div>
            <div className="w=50">
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
          </div>
          <div className="input-group mb-3 d-flex justify-content-center ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                D
              </span>
            </div>
            <div className="w=50">
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
          </div>

          <div className="d-flex justify-content-center ">
            <Button
              type="button"
              className="btn btn-success rounded-circle "
              onClick={handleAdd}
              disabled={addTodoDisable}
            >
              Add
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TodoList;
