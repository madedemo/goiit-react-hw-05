import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';

const Navigation = () => {
const buildLinkClassforNav = () => {
    return clsx(css.link, css.active);
}

  return (
      <div className={css.navDiv}>
          <NavLink className={buildLinkClassforNav} to="/">Home</NavLink>
          <NavLink className={buildLinkClassforNav} to="/movies">Movies</NavLink>
    </div>
  )
}

export default Navigation