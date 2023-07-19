import { useSelector } from 'react-redux'

const Notification = () => {
  // eslint-disable-next-line react-redux/useSelector-prefer-selectors
  const notification = useSelector(({ notification }) => notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  if (notification !== '') {
    return (
      <div style={style}>
        {notification}
      </div>
    )
  }

}

export default Notification
