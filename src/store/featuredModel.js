import { createSlice } from '@reduxjs/toolkit';

const featuredModelSlice = createSlice({
  name: 'featuredModel',
  initialState: {
    price: 949.99,
    guarantees: {
      low: false,
      middle: false,
      high: false,
    },
    chosenGuarantee: null,
    totalCost: 949.99,
    id: null,
  },
  reducers: {
    chooseGuarantee(state, action) {
      if (state.guarantees[action.payload.chosen] === true) {
        state.chosenGuarantee = null;
        state.totalCost = state.price;
        state.guarantees.low = false;
        state.guarantees.middle = false;
        state.guarantees.high = false;
        state.id = null;
      } else {
        state.guarantees.low = false;
        state.guarantees.middle = false;
        state.guarantees.high = false;
        state.guarantees[action.payload.chosen] = true;
        state.chosenGuarantee = action.payload.price;
        state.totalCost = state.price + state.chosenGuarantee;
        state.id = action.payload.id;
      }
    },
  },
});

export const { chooseGuarantee } = featuredModelSlice.actions;

export default featuredModelSlice.reducer;
