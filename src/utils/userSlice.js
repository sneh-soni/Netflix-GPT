import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {},
    removeUser: (state, action) => {},
  },
});

export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;
