import { useAuth } from 'hooks/useAuth';

import { LinkNavStyled } from './Navigation.styled';
import { PhoneIcon } from '@chakra-ui/icons';
import { Heading } from '@chakra-ui/react';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <nav>
      {!isLoggedIn && (
        <Heading size="md">
          <PhoneIcon w={6} h={6} /> &#8194; Welcome to contacts book
        </Heading>
      )}
      {isLoggedIn && <LinkNavStyled to="/contacts">Contacts</LinkNavStyled>}
    </nav>
  );
};
