import { createSlice } from '@reduxjs/toolkit'

const anecdotesAtStart = []

const getId = () => (100000 * Math.random()).toFixed(0)

const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}

const initialState = anecdotesAtStart.map(asObject)

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
      const newState = state.concat({
        content: action.payload,
        id: getId(),
        votes: 0
      })
      return newState
    },
    setAnecdotes(state, action) {
      return action.payload
    }
  }
})

export const { voteAnecdote, createAnecdote, setAnecdotes } = anecdotesSlice.actions
export default anecdotesSlice.reducer