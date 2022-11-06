import { useState, useEffect } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm, ContactList, Filter } from './index';
import { Container } from './PhoneBook.styled';
const LS_KEY = 'contacts';

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LS_KEY)) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem(LS_KEY, JSON.stringify(contacts));
  }, [contacts]);

  const formSubmitHandler = data => {
    contacts.some(({ name }) => name.toLowerCase() === data.name.toLowerCase())
      ? Notify.failure(`${data.name} is already in contacts`)
      : setContacts([...contacts, data]);
  };

  const filteredContacts = () => {
    if (contacts.length === 0) return;
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase().trim())
    );
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={formSubmitHandler} />

      <h2>Contacts</h2>
      <Filter
        filter={filter}
        handleChange={e => {
          setFilter(e.currentTarget.value);
        }}
      />
      {filteredContacts() && (
        <ContactList
          contacts={filteredContacts()}
          deleteContact={id => {
            setContacts(state => state.filter(contact => contact.id !== id));
            setFilter('');
          }}
        />
      )}
    </Container>
  );
}
