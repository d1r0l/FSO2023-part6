import { useQuery, useMutation, useQueryClient } from 'react-query'
import { getAnecdotes, voteAnecdote } from './requests'
import AnecdoteForm from './components/AnecdoteForm'
import Notification from './components/Notification'
import { useNotificationSet } from './NotificationContext'

const App = () => {
  const queryClient = useQueryClient()

  const createAnecdoteMutation = useMutation(voteAnecdote, {
    onSuccess: (returnedAnecdote) => {
      const anecdotes = queryClient.getQueryData('anecdotes')
      queryClient.setQueryData('anecdotes', anecdotes.map(anecdote =>
        anecdote.id === returnedAnecdote.id
          ? returnedAnecdote
          : anecdote
      ))
    },
  })

  const setNotification = useNotificationSet()
  const handleVote = (anecdote) => {
    createAnecdoteMutation.mutate({
      content: anecdote.content,
      id: anecdote.id,
      votes: anecdote.votes + 1
    })
    setNotification(`you voted "${anecdote.content}"`, 5)
  }

  const result = useQuery('anecdotes', getAnecdotes, {
    retry: 2,
    refetchOnWindowFocus: false
  })

  if ( result.isLoading ) {
    return <div>loading data...</div>
  } else if ( result.isError ) {
    return <div>anecdote service unavalable due to problems in server</div>
  }

  const anecdotes = result.data

  return (
    <div>
      <h3>Anecdote app</h3>
      <Notification />
      <AnecdoteForm />
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => handleVote(anecdote)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
