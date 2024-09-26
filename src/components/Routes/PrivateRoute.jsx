// src/components/Routes/PrivateRoute.jsx

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
    selectIsLoggedIn,
    selectIsRefreshing,
} from '../../redux/auth/selectors';
import PropTypes from 'prop-types';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isRefreshing = useSelector(selectIsRefreshing);
    const shouldRedirect = !isLoggedIn && !isRefreshing;

    return shouldRedirect ? <Navigate to={redirectTo} /> : children;
};

PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string,
};

export default PrivateRoute;
