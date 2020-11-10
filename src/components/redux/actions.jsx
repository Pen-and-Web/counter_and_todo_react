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

export const addTodo = (id, title, des) => {
  return {
    type: "ADD_TODO",
    payload: {
      id: id,
      title: title,
      description: des
    }
  };
};

export const removeTodo = id => {
  return {
    type: "REMOVE_TODO",
    payload: {
      id: id
    }
  };
};
