import { createSlice } from '@reduxjs/toolkit'

const initialState = ''

const notificationSlice = createSlice({
  name: 'notification',
  initialState,
  reducers: {
    notificationCreate(state, action) {
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

export const { notificationCreate, notificationRemove } = notificationSlice.actions

let timeoutId = null

export const notificationSet = (text, seconds) => {
  return async dispatch => {
    clearTimeout(timeoutId)
    dispatch(notificationCreate(text))
    timeoutId = setTimeout(() => dispatch(notificationRemove()), seconds * 1000)
  }
}

export default notificationSlice.reducer
