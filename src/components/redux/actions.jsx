import React from "react";

export const increment = () => {
  return {
    type: "INCREMENT"
  };
};

export const decrement = () => {
  return {
    type: "DECREMENT"
  };
};

export const reset = () => {
  return {
    type: "RESET"
  };
};
export const addTodo = (title, des) => {
  return {
    type: "ADD_TODO",
    payload: {
      title: title,
      des: des
    }
  };
};
