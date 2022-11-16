import { useSelector } from 'react-redux';
import { isContactsSelector } from 'Redux/selectors/selectors';
import { ContactForm, ContactList, Filter } from './index';
import { Container } from './PhoneBook.styled';

export default function App() {
  const isContacts = useSelector(isContactsSelector);

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
