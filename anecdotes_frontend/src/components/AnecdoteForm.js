import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdotesReducer'

const AnecdoteForm = () => {
  const dispatch = useDispatch()
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={(event) => dispatch(createAnecdote(event))}>
        <div>
          <input name='anecdote' />
        </div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
