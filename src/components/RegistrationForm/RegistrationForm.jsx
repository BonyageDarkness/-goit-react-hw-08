import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations';
import { selectAuthError } from '../../redux/auth/selectors';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from '../Form.module.css';

const validationSchema = Yup.object({
    name: Yup.string().required('Обязательное поле'),
    email: Yup.string().email('Неверный email').required('Обязательное поле'),
    password: Yup.string()
        .min(7, 'Минимум 7 символов')
        .required('Обязательное поле'),
});

const RegistrationForm = () => {
    const dispatch = useDispatch();
    const error = useSelector(selectAuthError);

    const handleSubmit = (values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
    };

    return (
        <>
            <Formik
                initialValues={{ name: '', email: '', password: '' }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form className={styles.form}>
                    <label className={styles.label}>
                        Имя
                        <Field
                            className={styles.input}
                            type="text"
                            name="name"
                        />
                        <ErrorMessage
                            name="name"
                            component="div"
                            className={styles.error}
                        />
                    </label>
                    <label className={styles.label}>
                        Email
                        <Field
                            className={styles.input}
                            type="email"
                            name="email"
                        />
                        <ErrorMessage
                            name="email"
                            component="div"
                            className={styles.error}
                        />
                    </label>
                    <label className={styles.label}>
                        Пароль
                        <Field
                            className={styles.input}
                            type="password"
                            name="password"
                        />
                        <ErrorMessage
                            name="password"
                            component="div"
                            className={styles.error}
                        />
                    </label>
                    <button className={styles.button} type="submit">
                        Зарегистрироваться
                    </button>
                </Form>
            </Formik>
            {error && <p className={styles.error}>{error}</p>}
        </>
    );
};

export default RegistrationForm;