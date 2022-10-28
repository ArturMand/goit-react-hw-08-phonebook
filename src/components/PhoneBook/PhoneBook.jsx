import React, { Component } from 'react';
import { ContactForm, ContactList, Filter } from './components/index';
import initialValue from './initialValue';
import { Container } from './PhoneBook.styled';
export default class PhoneBook extends Component {
  state = initialValue;
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}
