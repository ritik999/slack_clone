import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  roomId: null,
}

export const counterSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    enterRoom: (state,action) => {
      
      state.roomId=action.payload
    },
   
  },
})


export const { enterRoom } = counterSlice.actions

export default counterSlice.reducer