import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../store/auth'
import classes from './Header.module.css';

const Header = () =>
{
  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.isAuthenticated)
  const logoutHandler = () =>
  {
    dispatch(authActions.logout())
  }
  return (
    <header className={classes.header}>
      <h1>LOGO</h1>
      {isAuth && <nav>
        <ul>
          <li>
            <a href='/'>Counter</a>
          </li>
          <li>
            <a href='/'>Settings</a>
          </li>
          <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
        </ul>
      </nav>}
    </header>
  );
};

export default Header;
