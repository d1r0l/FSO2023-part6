import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (anecdote) => {
  const getId = () => (100000 * Math.random()).toFixed(0)
  const anecdoteObject = {
    content: anecdote,
    id: getId(),
    votes: 0
  }
  const response = await axios.post(baseUrl, anecdoteObject)
  return response.data
}

const voteAdd = async (anecdote) => {
  const anecdoteVoted = {
    content: anecdote.content,
    id: anecdote.id,
    votes: anecdote.votes + 1
  }
  const response = await axios.put(`${baseUrl}/${anecdote.id}`, anecdoteVoted)
  return response.data
}

export default { getAll, createNew, voteAdd }
