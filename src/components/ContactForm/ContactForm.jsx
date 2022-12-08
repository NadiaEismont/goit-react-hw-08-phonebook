import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/operations';
import { NotificationManager } from 'react-notifications';
import { getContacts } from 'redux/selectors';
import { TagForm, LabelForm } from './ContactForm.styled';
import { Input } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';

export default function ContactForm() {
  const dispatch = useDispatch();
  const { items: contacts } = useSelector(getContacts);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    if (contacts.some(contact => contact.name === name)) {
      return NotificationManager.warning(`${name} is already in contacts`);
    }

    dispatch(addContact({ name, number }));
    form.reset();
  };

  return (
    <TagForm onSubmit={handleSubmit}>
      <LabelForm htmlFor="name">Name</LabelForm>
      <Input type="text" name="name" placeholder="Your name" />
      <LabelForm htmlFor="number">Number</LabelForm>
      <Input
        type="tel"
        name="number"
        placeholder="Your phone number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
      <Button type="submit">Add contact</Button>
    </TagForm>
  );
}
