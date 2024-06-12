// slices/bookingSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  numberOfPeople: 1,
  tripPrice: 1000, // Example base price for the trip
  additionalServices: [],
  serviceCharge: 50, // Example service charge
};

const bookingSlice = createSlice({
  name: 'booking',
  initialState,
  reducers: {
    setNumberOfPeople: (state, action) => {
      state.numberOfPeople = action.payload;
    },
    addService: (state, action) => {
      const { serviceId, serviceName, servicePrice, quantity } = action.payload;
      const existingService = state.additionalServices.find(service => service.serviceId === serviceId);
      if (existingService) {
        existingService.quantity = quantity;
      } else {
        state.additionalServices.push({ serviceId, serviceName, servicePrice, quantity });
      }
    },
    removeService: (state, action) => {
      state.additionalServices = state.additionalServices.filter(service => service.serviceId !== action.payload);
    },
  },
});

export const { setNumberOfPeople, addService, removeService } = bookingSlice.actions;
export default bookingSlice.reducer;
