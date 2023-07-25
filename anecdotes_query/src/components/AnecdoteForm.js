import { useMutation, useQueryClient } from 'react-query'
import { createAnecdote } from '../requests'
import { useNotificationSet } from '../NotificationContext'

const AnecdoteForm = () => {
  const queryClient = useQueryClient()
  const setNotification = useNotificationSet()

  const createAnecdoteMutation = useMutation(createAnecdote, {
    onSuccess: (returnedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.concat(returnedAnecdote))
      setNotification(`you created "${returnedAnecdote.content}"`, 5)
    },
    onError: (error) => {
      if (error.code === 'ERR_BAD_REQUEST') setNotification('creation failed, anecdote is too short', 5)
      else setNotification('creation failed', 5)
    }
  })

  const onCreate = (event) => {
    const getId = () => {
      const id = Math.floor(Math.random()*100000)
      return id
    }

    event.preventDefault()
    const content = event.target.anecdote.value
    event.target.anecdote.value = ''
    createAnecdoteMutation.mutate({
      content: content,
      id: getId(),
      votes: 0
    })
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
