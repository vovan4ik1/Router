import { NavLink, Outlet } from 'react-router-dom';
import cn from 'classnames';
import './App.scss';

export const App = () => {
  const Getlink = ({ isActive }: { isActive: boolean }) =>
    cn('navbar-item', {
      'is-active': isActive,
    });
  return(
<html className="has-navbar-fixed-top">
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={Getlink}>
              Home
            </NavLink>
            <NavLink to="/tabs" className={Getlink}>
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </html>
  );
};