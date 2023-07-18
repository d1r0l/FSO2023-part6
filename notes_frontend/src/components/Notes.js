/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from 'react-redux'
import { toggleImportanceOf } from '../reducers/noteReducer'

const Note = ({ note, handleClick }) => {
  return(
    <li onClick={handleClick}>
      {note.content}
      <strong> {note.important ? 'important' : ''}</strong>
    </li>
  )
}

const Notes = () => {

  const dispatch = useDispatch()
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const notes = useSelector(state => state)
  // const importantNotes = useSelector(state => state.filter(note => note.important))

  return (
    <ul>
      {notes.map((note) => (
        <Note
          key={note.id}
          note={note}
          handleClick={() => dispatch(toggleImportanceOf(note.id))}
        />
      ))}
    </ul>
  )
}

export default Notes