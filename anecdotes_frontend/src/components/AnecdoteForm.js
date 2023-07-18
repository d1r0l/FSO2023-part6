import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdotesReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  return (
    <form onSubmit={(event) => dispatch(createAnecdote(event))}>
      <div>
        <input name='anecdote' />
      </div>
      <button type='submit'>create</button>
    </form>
  )
}

export default AnecdoteForm
