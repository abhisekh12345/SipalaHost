"use client"
import React from 'react'
import store from './store/store'
import { Provider } from 'react-redux'

const StoreProviders = ({children}) => {
  return  <Provider store={store}>{children}</Provider>
}

export default StoreProviders