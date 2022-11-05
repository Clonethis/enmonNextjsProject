import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// omit imports and state

export const fetchToken = createAsyncThunk("token/fetchToken", async () => {
  const response = await axios.post(
    "https://tools.dev.enmon.tech/api/auth/local",
    {
      identifier: email,
      password: password,
    }
  );
  return response.data.jwt;
});

const tokenSlice = createSlice({
  name: "token",
  initialState: "",
  reducers: {
    // omit reducer cases
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchToken.pending, (state, action) => {
        state.status = "loadingToken";
      })
      .addCase(fetchToken.fulfilled, (state, action) => {
        state.status = action.payload;
        console.log(state);

        // action.payload.forEach(todo => {
        //   newEntities[todo.id] = todo
        // })
        // state.entities = newEntities
        state.status = "idle";
      });
  },
});

// omit exports
