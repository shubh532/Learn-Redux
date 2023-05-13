import { useSelector,useDispatch } from 'react-redux';
import classes from './Header.module.css';
import { AuthencationAction } from '../Redux Store/Authetication';

const Header = () => {

  const isAuthencate = useSelector(state => state.Authentication.isAuthencate)
  const dispatch=useDispatch()

  const IsLogout=()=>{
    dispatch(AuthencationAction.IsLogout())
  }

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isAuthencate && <li>
            <a href='/'>My Products</a>
          </li>}
          {isAuthencate && <li>
            <a href='/'>My Sales</a>
          </li>}
          {isAuthencate && <li>
            <button onClick={IsLogout}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
