import classes from './Counter.module.css';
import { useSelector } from 'react-redux';
const Counter = () => {

  const Counter= useSelector(state=>state.counter)

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{Counter}</div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
