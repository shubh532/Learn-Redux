import { Fragment } from 'react';
import { useSelector } from 'react-redux';
import Counter from './components/Counter';
import Auth from './components/Auth';
import Header from './components/Header';
import UserProfile from './components/UserProfile';

function App() {
  
  const IsAuthencation=useSelector(state=>state.Authentication.isAuthencate)

  return (
    <Fragment>
      <Header />
      {IsAuthencation&&<UserProfile/>}
      {!IsAuthencation&&<Auth/>}
      <Counter />
    </Fragment>

  );
}

export default App;
