import { JSX } from "react";
import { NavLink } from "react-router-dom";
import styles from './Header.module.css'

const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <nav className={styles.header__nav}>
        <NavLink to={'/'} >First task</NavLink>
        <NavLink to={'/second'} >Second task</NavLink>
        <NavLink to={'/third'} >Third task</NavLink>
      </nav>
    </header>
  );
};
export default Header;
