import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormStyled, LabelLogin } from './LoginForm.styled';
import { Input } from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit}>
      <LabelLogin>
        Email
        <Input placeholder="Your email" type="email" name="email" />
      </LabelLogin>
      <LabelLogin>
        Password
        <Input placeholder="Your password" type="password" name="password" />
      </LabelLogin>
      <Button type="submit">Log In</Button>
    </FormStyled>
  );
};
