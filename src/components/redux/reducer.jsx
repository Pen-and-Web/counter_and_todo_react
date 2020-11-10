import _ from "lodash";

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT": {
      let tempState = { ...state };
      tempState.counter = state.counter + 1;
      return tempState;
    }
    case "DECREMENT": {
      let tempState = { ...state };
      tempState.counter = state.counter - 1;
      return tempState;
    }
    case "RESET": {
      let tempState = { ...state };
      tempState.counter = 0;
      return tempState;
    }
    case "ADD_TODO": {
      let tempState = { ...state };
      tempState.todos.push(action.payload);
      return tempState;
    }
    case "REMOVE_TODO": {
      let tempState = { ...state };
      let updatedTodos = _.remove(state.todos, function(todo) {
        return todo.id !== action.payload.id;
      });
      tempState.todos = updatedTodos;
      return tempState;
    }
    default:
      return state;
  }
};

export default counterReducer;
