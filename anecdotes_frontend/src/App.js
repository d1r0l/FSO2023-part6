import { useSelector, useDispatch } from 'react-redux'

const App = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const anecdotes = useSelector(state => state)
  const dispatch = useDispatch()

  const vote = (id) => {
    return dispatch({
      type: 'VOTE',
      payload: { id: id }
    })
  }

  const create = (event) => {
    event.preventDefault()
    console.log(event.target.anecdote.value)
    return dispatch({
      type: 'CREATE',
      payload: { content: event.target.anecdote.value }
    })
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}{' '}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={(event) => create(event)}>
        <div><input name='anecdote'/></div>
        <button type='submit'>create</button>
      </form>
    </div>
  )
}

export default App
