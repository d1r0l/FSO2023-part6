export const handleChange = (event) => {
  return {
    type: 'FILTER',
    payload: { content: event.target.value }
  }
}

const reducer = (state = '', action) => {
  switch (action.type) {
    case 'FILTER':
      return action.payload.content
    default:
      return state
  }
}

export default reducer