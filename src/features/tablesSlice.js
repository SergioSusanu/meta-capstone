import { createSlice } from "@reduxjs/toolkit";
import { fetchTables } from "../utils/fakeAPI";

const initialState = {
  selected: 0,
  TablesStatuses: fetchTables(new Date())
};

export const tablesSlice = createSlice({
  name: "tables",
  initialState,
  reducers: {
    select: (state, action) => {
        state.TablesStatuses[state.selected] = 1 //de-select previous table
        state.TablesStatuses[action.payload] = 2; //update new table to selected
        state.selected = action.payload //update the pointer
    },
    unSelect: (state, action) => {
      state.TablesStatuses[action.payload] = 1; //update new table to unselected
      state.selected = 0; //update the pointer
    },
    updateTablesStatutes: (state, action) => {
      state.selected = 0;
      state.TablesStatuses = action.payload
    }
  },
});

// Action creators are generated for each case reducer function
export const { select, unSelect, updateTablesStatutes   } = tablesSlice.actions;

export default tablesSlice.reducer;
