import {
  Outlet,
} from 'react-router';
import {
  NavLink,
} from 'react-router-dom';

export default function Layout() {
  return <>
    <header>
      <ul>
        <NavLink className="teal" to="/rgb/20/220/207">
          Teal
        </NavLink>
        <NavLink className="maize" to="/rgb/255/203/5">
          Maize
        </NavLink>
        <NavLink className="blue" to="/rgb/0/39/76">
          Blue
        </NavLink>
      </ul>
    </header>
    <Outlet />
  </>
}