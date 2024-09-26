import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

const AuthNav = () => {
    return (
        <div className={styles.authNav}>
            <NavLink
                to="/register"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                }
            >
                Регистрация
            </NavLink>
            <NavLink
                to="/login"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                }
            >
                Вход
            </NavLink>
        </div>
    );
};

export default AuthNav;
