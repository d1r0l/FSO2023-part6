import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

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

export const initialiseAnecdotes = () => {
  return async dispatch => {
    const fetchedAnecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(fetchedAnecdotes))
  }
}

export default anecdotesSlice.reducer