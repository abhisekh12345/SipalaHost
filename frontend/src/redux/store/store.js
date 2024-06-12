import {configureStore} from '@reduxjs/toolkit'
import { apiSlice } from '../slices/apiSlice'
import authReducer from '../slices/authSlice'
import bookingReducer from '../slices/bookingSlice'



const store = configureStore({
    reducer : {
      [apiSlice.reducerPath] : apiSlice.reducer,
      auth : authReducer,
      booking : bookingReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true,
})

export default store