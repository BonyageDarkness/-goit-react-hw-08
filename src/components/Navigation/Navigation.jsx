import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import styles from './Navigation.module.css';

const Navigation = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return (
        <nav className={styles.nav}>
            <NavLink
                to="/"
                className={({ isActive }) =>
                    isActive ? styles.activeLink : styles.link
                }
            >
                Главная
            </NavLink>
            {isLoggedIn && (
                <NavLink
                    to="/contacts"
                    className={({ isActive }) =>
                        isActive ? styles.activeLink : styles.link
                    }
                >
                    Контакты
                </NavLink>
            )}
        </nav>
    );
};

export default Navigation;