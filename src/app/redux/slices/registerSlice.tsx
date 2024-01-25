import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserForm {
  country?: string;
  activity?: string;
  email?: string;
  password?: string;
}

const initialState: UserForm = {
  country: "",
  activity: "",
  email: "",
  password: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addAttribue: (state, action: PayloadAction<UserForm>) => {
      state.country = action.payload.country;
      state.activity = action.payload.activity;
      state.email = action.payload.email;
      state.password = action.payload.password;
    },
  },
});

export const { addAttribue } = registerSlice.actions;
export default registerSlice.reducer;
