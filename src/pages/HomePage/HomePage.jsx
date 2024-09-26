// src/pages/HomePage/HomePage.jsx

import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Добро пожаловать в Книгу Контактов</h1>
            <p className={styles.description}>
                Управляйте своими контактами легко и удобно.
            </p>
        </div>
    );
};

export default HomePage;
