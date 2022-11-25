import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getToken } from 'redux/auth/authSelector/authSelector';
import { getIsContacts } from 'redux/contactsSlice/contactsSelectors';
import { fetchContacts } from 'redux/contactsSlice/operations';
import { Title, Container } from './Contacts.styled';
const Contacts = () => {
  const dispatch = useDispatch();

  const contatsList = useSelector(getIsContacts);
  const token = useSelector(getToken);

  useEffect(() => {
    token && dispatch(fetchContacts());
  }, [dispatch, token]);

  return token ? (
    <Container>
      <Title>Phonebook</Title>
      <ContactForm />
      <Title>Contacts</Title>
      <Filter />
      {contatsList && <ContactList />}
    </Container>
  ) : (
    <Title>Please login or register</Title>
  );
};
export default Contacts;
//
