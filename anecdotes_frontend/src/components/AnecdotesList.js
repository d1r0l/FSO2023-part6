import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdotesReducer'
import { notificationSet, notificationRemove } from '../reducers/notificationReducer'

let timeoutId = null

const AnecdotesList = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') return anecdotes
    else
      return anecdotes.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      )
  })
  const anecdotesSortedByVotes = [...anecdotes].sort((a, b) => b.votes - a.votes)

  const dispatch = useDispatch()

  const handleVote = (anecdote) => {
    clearTimeout(timeoutId)
    dispatch(voteAnecdote(anecdote))
    dispatch(notificationSet(`you voted "${anecdote.content}"`))
    timeoutId = setTimeout(() => dispatch(notificationRemove()), 5000)
  }

  return (
    anecdotesSortedByVotes
      .map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{' '}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      ))
  )
}

export default AnecdotesList
