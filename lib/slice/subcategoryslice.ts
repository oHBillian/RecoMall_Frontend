import { createSlice } from "@reduxjs/toolkit";

interface subcategorySliceprops {
  SubcategoryId : number | null;
}

const initialState: subcategorySliceprops = { SubcategoryId: null };

const subcategorySlice = createSlice({
  name: "subcategoryId",
  initialState,
  reducers: {
    setSubcategoryId: (state,actions) => {
      state.SubcategoryId = actions.payload;
    },
  },
});

export const { setSubcategoryId } = subcategorySlice.actions;
export default subcategorySlice.reducer;
