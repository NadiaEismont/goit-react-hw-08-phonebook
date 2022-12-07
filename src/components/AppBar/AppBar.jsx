import { Navigation } from '../Navigation/Navigation';
import { UserMenu } from '../UserMenu/UserMenu';
import { AuthNav } from '../AuthNav/AuthNav';
import { useAuth } from 'hooks';
import { HeaderStyled } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <HeaderStyled>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </HeaderStyled>
  );
};
