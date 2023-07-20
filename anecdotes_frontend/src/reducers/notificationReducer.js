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

let timeoutId = null

export const notificationPop = (anecdoteContent) => {
  return async dispatch => {
    clearTimeout(timeoutId)
    dispatch(notificationSet(`you voted "${anecdoteContent}"`))
    timeoutId = setTimeout(() => dispatch(notificationRemove()), 5000)
  }
}

export default notificationSlice.reducer
