import { createSlice } from "@reduxjs/toolkit";

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    todoAdded(state, action) {
      const todo = action.payload;
      state.data[todo.id] = todo;
    },
    todoToggled(state, action) {
      const todoId = action.payload;
      const todo = state.data[todoId];
      todo.completed = !todo.completed;
    },
  },
});

// export const { todoAdded, todoToggled } = todosSlice.actions

export default todosSlice.reducer;

// action creator
const getJwtToken = (text) => {
  type: "axios/jwtToken";
  payload: text;
};
// behaves like an eventListener
