// src/features/counter/counterSlice.ts

import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  activeStep: number;
}

const initialState: CounterState = {
  activeStep: 1,
};

const stepSlice = createSlice({
  name: "step",
  initialState,
  reducers: {
    incrementStep: (state) => {
      state.activeStep++;
    },
    decrementStep: (state) => {
      state.activeStep--;
    },
  },
});

export const { incrementStep, decrementStep } = stepSlice.actions;
export default stepSlice.reducer;
