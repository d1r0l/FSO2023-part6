import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdotesReducer'

const AnecdotesList = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()
  return (
    anecdotes
      .sort((a, b) => b.votes - a.votes)
      .map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}{' '}
            <button onClick={() => dispatch(voteAnecdote(anecdote.id))}>vote</button>
          </div>
        </div>
      ))
  )
}

export default AnecdotesList
