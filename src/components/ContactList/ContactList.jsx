import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonDelete, LabelList, LabelListNumber } from './ContactList.styled';
import { getFilter, getContacts } from 'redux/selectors';
import { fetchContacts, deleteContact } from 'redux/operations';
import { Loader } from 'components/Spinner/Spinner';
import {
  TableContainer,
  Th,
  Tr,
  Td,
  Table,
  Thead,
  Tbody,
} from '@chakra-ui/react';

const ContactList = () => {
  const dispatch = useDispatch();
  const onClick = id => {
    dispatch(deleteContact(id));
  };
  const { items: contacts, isLoading, error } = useSelector(getContacts);

  const filter = useSelector(getFilter);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
    return visibleContacts;
  };

  return (
    <div>
      {isLoading && <Loader />}
      {error && <p>{error}</p>}
      {contacts && contacts.length > 0 && (
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Phone number</Th>
                <Th>Delete contact</Th>
              </Tr>
            </Thead>
            <Tbody>
              {getVisibleContacts().map(contact => (
                <Tr key={contact.id}>
                  <Td>
                    <LabelList type="text" name="name">
                      {contact.name}
                    </LabelList>
                  </Td>
                  <Td>
                    <LabelListNumber
                      type="tel"
                      name="number"
                      // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                      title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                      required
                    >
                      {contact.number}
                    </LabelListNumber>
                  </Td>
                  <Td>
                    <ButtonDelete
                      type="button"
                      key={contact.id}
                      onClick={() => onClick(contact.id)}
                    >
                      Delete
                    </ButtonDelete>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
};

export default ContactList;
