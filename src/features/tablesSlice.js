import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected: 0,
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    select: (state, action) => {
      state.selected = action.payload;
    },
    unSelect: (state) => {
      state.selected = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { select, unSelect } = tablesSlice.actions;

export default tablesSlice.reducer;
