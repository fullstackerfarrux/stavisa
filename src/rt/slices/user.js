import { createSlice } from "@reduxjs/toolkit";
const userLocal = localStorage.getItem("user");
const userStorage = JSON.parse(userLocal);

const initialState = {
  language: userStorage !== null ? userStorage.language : "ru",
};

const userSlice = createSlice({
  name: "language",
  initialState,
  reducers: {
    changeLanguage(state, action) {
      state.language = action.payload.language;
    },
  },
});

export const { changeLanguage } = userSlice.actions;
export default userSlice.reducer;
