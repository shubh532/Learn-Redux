import { useDispatch } from 'react-redux';
import { AuthencationAction } from '../Redux Store/Store';
import classes from './Auth.module.css';

const Auth = () => {

  const dispatch=useDispatch()

  const Login=(e)=>{
    e.preventDefault()
    dispatch(AuthencationAction.IsLogin())
  }
  
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={Login}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
