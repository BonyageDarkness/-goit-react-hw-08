import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import { FaUserAlt, FaPhoneAlt } from 'react-icons/fa';
import styles from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ id, name, number }) => {
    const dispatch = useDispatch();

    const handleDelete = () => {
        dispatch(deleteContact(id));
    };

    return (
        <li className={styles.contact}>
            <div className={styles.contactInfo}>
                <div className={styles.avatar}>
                    <FaUserAlt className={styles.icon} />
                </div>
                <div className={styles.details}>
                    <p className={styles.name}>{name}</p>
                    <div className={styles.phone}>
                        <FaPhoneAlt className={styles.phoneIcon} />
                        <span>{number}</span>
                    </div>
                </div>
            </div>
            <button
                type="button"
                className={styles.deleteButton}
                onClick={handleDelete}
            >
                Удалить
            </button>
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
};

export default Contact;
