import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote(state, action) {
      const newState = state.map((anecdote) =>
        anecdote.id === action.payload
          ? { ...anecdote, votes: anecdote.votes + 1 }
          : anecdote
      )
      return newState
    },
    createAnecdote(state, action) {
      const newState = state.concat(action.payload)
      return newState
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, createAnecdote, setAnecdotes } = anecdotesSlice.actions
export default anecdotesSlice.reducer