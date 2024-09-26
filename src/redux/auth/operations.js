import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.goit.global';

// Установка заголовка авторизации
const setAuthHeader = (token) => {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

// Очистка заголовка авторизации
const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
};

// Регистрация пользователя
export const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/signup', credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(
                    error.response.data.message ||
                        'Ошибка при регистрации. Попробуйте снова.',
                );
            }
            return thunkAPI.rejectWithValue(
                'Сетевая ошибка. Попробуйте позже.',
            );
        }
    },
);

// Вход пользователя
export const logIn = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post('/users/login', credentials);
            setAuthHeader(data.token);
            return data;
        } catch (error) {
            if (error.response && error.response.data) {
                return thunkAPI.rejectWithValue(
                    error.response.data.message ||
                        'Ошибка при входе. Проверьте данные.',
                );
            }
            return thunkAPI.rejectWithValue(
                'Сетевая ошибка. Попробуйте позже.',
            );
        }
    },
);

// Выход пользователя
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
    } catch (error) {
        return thunkAPI.rejectWithValue(
            error.response?.data?.message ||
                'Ошибка при выходе. Попробуйте позже.',
        );
    }
});

// Обновление пользователя
export const refreshUser = createAsyncThunk(
    'auth/refresh',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (!persistedToken) {
            return thunkAPI.rejectWithValue(
                'Нет токена для обновления пользователя.',
            );
        }

        try {
            setAuthHeader(persistedToken);
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(
                error.response?.data?.message ||
                    'Не удалось обновить пользователя.',
            );
        }
    },
);
