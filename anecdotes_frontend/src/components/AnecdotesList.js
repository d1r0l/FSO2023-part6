import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdotesReducer'
import { notificationPop } from '../reducers/notificationReducer'

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
    dispatch(voteAnecdote(anecdote))
    dispatch(notificationPop(anecdote.content))
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
