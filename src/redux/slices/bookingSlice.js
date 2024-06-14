import { createSlice } from '@reduxjs/toolkit';

const options = [
  { id: 'option1', name: 'Extra Porter', price: 200 },
  { id: 'option2', name: 'Guided Tour', price: 150 },
  { id: 'option3', name: 'Meal Plan', price: 100 },
];

const initialState = {
  numberOfPeople: 1,
  tripPricePerPerson: null, // Initialize as null or 0
  selectedOptions: options.reduce((acc, option) => {
    acc[option.id] = 1; // Default to 1
    return acc;
  }, {}),
  serviceCharge: 50,
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setNumberOfPeople(state, action) {
      state.numberOfPeople = action.payload;
    },
    updateOption(state, action) {
      const { optionId, count } = action.payload;
      state.selectedOptions[optionId] = count;
    },
    setTripPricePerPerson(state, action) {
      state.tripPricePerPerson = action.payload;
    },
  },
});

export const { setNumberOfPeople, updateOption, setTripPricePerPerson } = bookingSlice.actions;
export const selectBooking = (state) => state.booking;
export default bookingSlice.reducer;
