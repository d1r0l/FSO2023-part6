import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationSet(state, action) {
      switch (state) {
        default:
          return action.payload
      }
    },
    notificationRemove(state) {
      switch (state) {
        default:
          return ''
      }
    }
  }
})

export const { notificationSet, notificationRemove } = notificationSlice.actions
export default notificationSlice.reducer
