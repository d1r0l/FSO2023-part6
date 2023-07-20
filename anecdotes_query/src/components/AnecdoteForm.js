const AnecdoteForm = () => {

  const onCreate = (event) => {
    event.preventDefault()
    // eslint-disable-next-line no-unused-vars
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    console.log('new anecdote')
  }

  return (
    <div>
      <h3>create new</h3>
      <form onSubmit={onCreate}>
        <input name='anecdote' />
        <button type="submit">create</button>
      </form>
    </div>
  )
}

export default AnecdoteForm
