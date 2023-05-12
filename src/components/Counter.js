import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
const Counter = () => {

  const Counter = useSelector(state => state.counter)
  const dispatch = useDispatch()
  const Increment = () => {
    dispatch({ type: "increment" })
  }
  const Decrement = () => {
    dispatch({ type: "decrement" })
  }
  const toggleCounterHandler = () => { };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{Counter}</div>

      <div>
        <button onClick={Increment}>Increment by 5</button>
        <button onClick={Decrement}>Decrement by 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
