import classes from './MyInput.module.css';

const MyInput = ({ ...props }) => {
  return <input aria-label='input' className={classes.MyInput} {...props} />;
};

export default MyInput;
