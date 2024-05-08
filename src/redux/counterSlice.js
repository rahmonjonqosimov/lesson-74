import { createSlice } from "@reduxjs/toolkit";
export const counterSlie = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    inc(state, actions) {
      state.value += actions.payload;
    },
    dec(state, actions) {
      state.value -= actions.payload;
    },
    res(state, actions) {
      state.value = actions.payload;
    },
  },
});
export const { inc, dec, res } = counterSlie.actions;
export default counterSlie.reducer;
