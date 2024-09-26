// src/components/Routes/RestrictedRoute.jsx

import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import PropTypes from 'prop-types';

const RestrictedRoute = ({ children, redirectTo = '/' }) => {
    const isLoggedIn = useSelector(selectIsLoggedIn);

    return isLoggedIn ? <Navigate to={redirectTo} /> : children;
};

RestrictedRoute.propTypes = {
    children: PropTypes.node.isRequired,
    redirectTo: PropTypes.string,
};

export default RestrictedRoute;
