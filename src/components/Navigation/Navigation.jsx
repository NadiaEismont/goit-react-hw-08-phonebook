import { useAuth } from 'hooks/useAuth';
import { LinkNavStyled } from './Navigation.styled';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      <LinkNavStyled to="/">Home</LinkNavStyled>
      {isLoggedIn && <LinkNavStyled to="/tasks">Tasks</LinkNavStyled>}
    </nav>
  );
};
