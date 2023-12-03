import { configureStore } from "@reduxjs/toolkit";
import tablesReducer from "../features/tablesSlice";

export const store = configureStore({
  reducer: {
    tables:tablesReducer
  },
});
