// src/components/ContactForm/ContactForm.jsx

import { useDispatch, useSelector } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(selectContacts);

    const handleSubmit = (values, { resetForm }) => {
        const { name, number } = values;

        const isDuplicate = contacts.some(
            (contact) => contact.name.toLowerCase() === name.toLowerCase(),
        );

        if (isDuplicate) {
            alert(`${name} is already in contacts.`);
            return;
        }

        dispatch(addContact({ name, number }));
        resetForm();
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Обязательное поле'),
        number: Yup.string().required('Обязательное поле'),
    });

    return (
        <Formik
            initialValues={{ name: '', number: '' }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
        >
            <Form className={styles.form}>
                <label>
                    Name
                    <Field type="text" name="name" />
                    <ErrorMessage name="name" component="div" />
                </label>
                <label>
                    Number
                    <Field type="text" name="number" />
                    <ErrorMessage name="number" component="div" />
                </label>
                <button type="submit">Add Contact</button>
            </Form>
        </Formik>
    );
};

export default ContactForm;
