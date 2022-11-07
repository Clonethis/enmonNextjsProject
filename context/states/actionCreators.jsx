export const addTodo = (text) => {
  return {
    type: "todos/todoAdded",
    payload: text,
  };
};
export const getMetersCreator = (jwt) => {
  return {
    type: "get/Meters",
    payload: jwt,
  };
};
