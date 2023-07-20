import { createSlice } from '@reduxjs/toolkit'
import anecdotesService from '../services/anecdotes'

const initialState = []

const anecdotesSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    replaceAnecdote(state, action) {
      const newState = state.map((anecdote) =>
        anecdote.id === action.payload.id
          ? action.payload
          : anecdote
      )
      return newState
    },
    appendAnecdote(state, action) {
      const newState = state.concat(action.payload)
      return newState
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { replaceAnecdote, appendAnecdote, setAnecdotes } = anecdotesSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const fetchedAnecdotes = await anecdotesService.getAll()
    dispatch(setAnecdotes(fetchedAnecdotes))
  }
}

export const createAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.createNew(anecdote)
    dispatch(appendAnecdote(newAnecdote))
  }
}

export const voteAnecdote = (anecdote) => {
  return async dispatch => {
    const newAnecdote = await anecdotesService.voteAdd(anecdote)
    dispatch(replaceAnecdote(newAnecdote))
  }
}

export default anecdotesSlice.reducer