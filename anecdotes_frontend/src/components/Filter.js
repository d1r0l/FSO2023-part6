import { useDispatch } from 'react-redux'
import { handleChange } from '../reducers/filterReducer'


const Filter = () => {
  const dispatch = useDispatch()

  const style = {
    marginBottom: 10
  }

  return (
    <div style={style}>
      filter <input onChange={(event) => dispatch(handleChange(event))} />
    </div>
  )
}

export default Filter