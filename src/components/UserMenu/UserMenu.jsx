import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logOut } from '../../redux/auth/operations';
import styles from './UserMenu.module.css';

const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogOut = () => {
        dispatch(logOut());
    };

    return (
        <div className={styles.userMenu}>
            <p className={styles.welcome}>Добро пожаловать, {user.name}</p>
            <button
                className={styles.button}
                type="button"
                onClick={handleLogOut}
            >
                Выйти
            </button>
        </div>
    );
};

export default UserMenu;
