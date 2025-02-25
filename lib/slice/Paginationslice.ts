import { createSlice } from "@reduxjs/toolkit";

interface paginationSliceprops {
  pagevalue: number;
}

const initialState: paginationSliceprops = { pagevalue: 1 };

const paginationSlice = createSlice({
  name: "pagevalue",
  initialState,
  reducers: {
    setIncrement: (state) => {
      state.pagevalue++;
    },
    setDescrement: (state) => {
      if(state.pagevalue > 1){
        state.pagevalue--;
      }
    },
    setNotChange: (state) => {
      return;
    }
  },
});

export const { setIncrement, setDescrement,setNotChange } = paginationSlice.actions;
export default paginationSlice.reducer;
