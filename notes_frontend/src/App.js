import { toggleImportanceOf } from './reducers/noteReducer'
import { useSelector, useDispatch } from 'react-redux'
import NewNote from './components/NewNote'

const App = () => {
  const dispatch = useDispatch()
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const notes = useSelector(state => state)
  // const importantNotes = useSelector(state => state.filter(note => note.important))

  const toggleImportance = (id) => {
    dispatch(toggleImportanceOf(id))
  }

  return (
    <div>
      <NewNote/>
      <ul>
        {notes.map(note =>
          <li
            key={note.id}

            onClick={() => toggleImportance(note.id)}
          >
            {note.content} <strong>{note.important ? 'important' : ''}</strong>
          </li>
        )}
      </ul>
    </div>
  )
}

export default App
