import { createSlice } from '@reduxjs/toolkit'


const initialState = { number: 0 , name : "DogApp State" } 

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment(state) {
      state.number++
    },
    decrement(state) {
      state.number--
    },
    incrementByAmount(state, action) {
      state.number += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer