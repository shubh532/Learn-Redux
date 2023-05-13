import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from '../Redux Store/Counter';
const Counter = () => {

  const Counter = useSelector(state => state.Counter.counter)
  const ShowCounter=useSelector(state=>state.Counter.ShowCounter)
  const dispatch = useDispatch()

  const Increment = () => {
    dispatch(counterActions.increment())
  }

  const Increase = () => {
    dispatch(counterActions.increase(5))
  }

  const Decrement = () => {
    dispatch(counterActions.decrement())
  }
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
   };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {ShowCounter&&<div className={classes.value}>{Counter}</div>}

      <div>
        <button onClick={Increment}>Increment</button>
        <button onClick={Increase}>Increase By 5</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
