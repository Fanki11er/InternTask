import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Row } from "../../Types/TableTypes";

export const rowSlice = createSlice({
  name: "rows",
  initialState: {
    rows: [] as Row[],
  },

  reducers: {
    addRow: (state, action: PayloadAction<Row>) => {
      state.rows.push(action.payload);
    },
    removeRow: (state, action: PayloadAction<string>) => {
      state.rows = state.rows.filter((user) => {
        return user.id !== action.payload;
      });
    },
    removeManyRows: (state, action: PayloadAction<string[]>) => {
      state.rows = state.rows.filter((user) => {
        return action.payload.indexOf(user.id) === -1;
      });
    },
    editRow: (state, action: PayloadAction<Row>) => {
      const originalRowId = state.rows.findIndex((row) => {
        return row.id === action.payload.id;
      });
      if (originalRowId > 0) {
        state.rows[originalRowId] = action.payload;
      }
    },
  },
});
export const { addRow, removeRow, removeManyRows, editRow } = rowSlice.actions;

export default rowSlice.reducer;
