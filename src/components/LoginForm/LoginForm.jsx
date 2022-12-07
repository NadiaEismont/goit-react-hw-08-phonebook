import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { FormStyled, LabelLogin } from './LoginForm.styled';

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
    <FormStyled onSubmit={handleSubmit} autoComplete="off">
      <LabelLogin>
        Email
        <input type="email" name="email" />
      </LabelLogin>
      <LabelLogin>
        Password
        <input type="password" name="password" />
      </LabelLogin>
      <button type="submit">Log In</button>
    </FormStyled>
  );
};
