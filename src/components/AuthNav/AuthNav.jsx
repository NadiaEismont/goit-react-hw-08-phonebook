import { NavLink } from 'react-router-dom';
import { NavigLink } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <div>
      <NavigLink to="/register">Register</NavigLink>
      <NavigLink to="/login">Log In</NavigLink>
    </div>
  );
};
