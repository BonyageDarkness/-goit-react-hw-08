import { useSelector } from 'react-redux';
import {
    selectLoading,
    selectError,
    selectFilteredContacts,
} from '../../redux/contacts/selectors';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = () => {
    const contacts = useSelector(selectFilteredContacts);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);

    if (loading) {
        return <p>Загрузка контактов...</p>;
    }

    if (error) {
        return <p>Ошибка при загрузке контактов: {error}</p>;
    }

    return (
        <ul className={styles.contactList}>
            {contacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </ul>
    );
};

export default ContactList;
