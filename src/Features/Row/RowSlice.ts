import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { User } from "../../Types/types";

export const rowSlice = createSlice({
  name: "rows",
  initialState: {
    rows: [] as User[],
    selectedRow: null as null | User,
  },

  reducers: {
    addRow: (state, action: PayloadAction<User>) => {
      state.rows.push(action.payload);
    },

    removeRow: (state, action: PayloadAction<string>) => {
      state.rows = state.rows.filter((user) => {
        return user.id !== action.payload;
      });
      state.selectedRow = null;
    },

    removeManyRows: (state, action: PayloadAction<string[]>) => {
      state.rows = state.rows.filter((user) => {
        return action.payload.indexOf(user.id) === -1;
      });
      state.selectedRow = null;
    },

    editRow: (state, action: PayloadAction<User>) => {
      const originalRowId = state.rows.findIndex((row) => {
        return row.id === action.payload.id;
      });
      if (originalRowId >= 0) {
        state.rows[originalRowId] = action.payload;
        state.selectedRow = null;
      }
    },

    selectRowToEdit: (state, action: PayloadAction<string>) => {
      const selectedRowIndex = state.rows.findIndex((row) => {
        return row.id === action.payload;
      });
      if (selectedRowIndex >= 0) {
        state.selectedRow = state.rows[selectedRowIndex];
      }
    },
  },
});
export const { addRow, removeRow, removeManyRows, editRow, selectRowToEdit } =
  rowSlice.actions;

export default rowSlice.reducer;
