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
    <div
      className={`container bg-light border rounded-lg p-2 ${
        updatedState.counter > 0
          ? "border-success"
          : updatedState.counter === 0
          ? "border-danger"
          : "border-primary"
      }`}
    >
      <h5 className="bg-info p-2 text-white"> Sample Counter Using Redux </h5>
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
        <h3>{updatedState.counter}</h3>
      </div>
      <div className="d-flex justify-content-center">
        <Button
          type="button"
          className="btn btn-success mr-2"
          onClick={handleAdd}
        >
          Add
        </Button>
        <Button
          type="button"
          className="btn btn-primary mr-2"
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
