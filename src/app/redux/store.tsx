// src/app/store.ts

import { configureStore } from "@reduxjs/toolkit";
import stepReducer from "./slices/stepsSlice";
import registerReducer from "./slices/registerSlice";
const store = configureStore({
  reducer: {
    step: stepReducer,
    register: registerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
