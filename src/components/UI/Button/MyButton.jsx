/* eslint-disable react/prop-types */
import classes from './MyButton.module.css'

const MyButton = ({children, ...props}) => {
  return (
    <button {...props} className={classes.MyButton}>
        {children}
    </button>
  )
}

export default MyButton