import { useDispatch, useSelector } from 'react-redux';
import { isContactsSelector } from 'Redux/selectors/selectors';
import { ContactForm, ContactList, Filter } from './index';
import { Container } from './PhoneBook.styled';
import { useEffect } from 'react';
import { fetchContacts } from 'Redux/contactsOperation/contactOperations';

export default function App() {
  const isContacts = useSelector(isContactsSelector);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm />

      <h2>Contacts</h2>
      <Filter />
      {isContacts && <ContactList />}
    </Container>
  );
}
