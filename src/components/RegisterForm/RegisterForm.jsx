import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { FormStyled, LabelRegister } from './RegisterForm.styled';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelRegister>
        Username
        <Input placeholder="Your name" type="text" name="name" />
      </LabelRegister>
      <LabelRegister>
        Email
        <Input placeholder="Your email" type="email" name="email" />
      </LabelRegister>
      <LabelRegister>
        Password
        <Input placeholder="Your password" type="password" name="password" />
      </LabelRegister>
      <Button type="submit">Register</Button>
    </FormStyled>
  );
};
