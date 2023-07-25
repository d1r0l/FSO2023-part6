import PropTypes from 'prop-types'
import { createContext, useReducer, useContext } from 'react'

const notificationReducer = (state, action) => {
  switch (action.type) {
    case 'SET':
      return action.payload
    case 'RESET':
      return ''
    default:
      return state
  }
}

const NotificationContext = createContext()

export const useNotificationValue = () => {
  const fullContext = useContext(NotificationContext)
  return fullContext[0]
}

export const useNotificationDispatch = () => {
  const fullContext = useContext(NotificationContext)
  return fullContext[1]
}
export const useNotificationSet = () => {
  const fullContext = useContext(NotificationContext)
  return fullContext[2]
}

let timeoutId = null

export const NotificationContextProvider = (props) => {
  const [ notification, notificationDispatch ] = useReducer(notificationReducer, '')

  const notificationSet = (text, delaySec) => {
    clearTimeout(timeoutId)
    notificationDispatch({ type: 'SET', payload: text })
    timeoutId = setTimeout(() => notificationDispatch({ type: 'RESET' }), delaySec*1000)
  }

  return (
    <NotificationContext.Provider value={[ notification, notificationDispatch, notificationSet ]}>
      {props.children}
    </NotificationContext.Provider>
  )
}

NotificationContextProvider.propTypes = {
  children: PropTypes.any.isRequired
}

export default NotificationContext
