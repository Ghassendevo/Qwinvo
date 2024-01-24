import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserForm {
  country?: string;
  activity?:string;
  email?:string;

}

const initialState: UserForm = {
  country: "",
};

const registerSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    addAttribue: (state, action) => {
      state = action.payload;
    },
  },
});

export const { addAttribue } = registerSlice.actions;
export default registerSlice.reducer;
