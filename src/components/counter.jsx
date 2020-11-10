import React, { useState, useEffect } from "react";
import store from "./redux/store";
import { increment, decrement, reset } from "./redux/actions";
import { Button } from "react-bootstrap";

const Counter = () => {
  const [updatedState, setUpdatedState] = useState({ counter: 0 });
  useEffect(() => {
    // store.dispatch(increment());
  });
  store.subscribe(() => {
    setUpdatedState(store.getState());
  });
  const handleAdd = () => {
    store.dispatch(increment());
  };
  const handleSubstract = () => {
    store.dispatch(decrement());
  };
  const handleReset = () => {
    store.dispatch(reset());
  };
  const renderReset = () => {
    return (
      <Button type="button" className="btn btn-danger" onClick={handleReset}>
        Reset
      </Button>
    );
  };
  return (
    <div className="container ">
      <div
        className={`d-flex justify-content-center alert ${
          updatedState.counter > 0
            ? "alert-success"
            : updatedState.counter === 0
            ? "alert-danger"
            : "alert-primary"
        }`}
        role="alert"
      >
        <h1>{updatedState.counter}</h1>
      </div>
      <div className="d-flex justify-content-center">
        <Button type="button" className="btn btn-success" onClick={handleAdd}>
          Add
        </Button>
        <Button
          type="button"
          className="btn btn-primary"
          onClick={handleSubstract}
        >
          Subtract
        </Button>
        {updatedState.counter !== 0 && renderReset()}
      </div>
    </div>
  );
};

export default Counter;
