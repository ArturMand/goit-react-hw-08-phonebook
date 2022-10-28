import React, { Component } from 'react';
import { ContactForm, ContactList, Filter } from './components/index';
import initialValue from './initialValue';
import { Container } from './PhoneBook.styled';
export default class PhoneBook extends Component {
  state = initialValue;

  onSubmitForm = e => {
    e.preventDefault();
    const contactName = e.target.elements.name.value;
    const contactPhone = e.target.elements.number.value;
    console.log(e.target.elements.name);
    this.setState({
      contacts: [
        ...this.state.contact,
        { name: contactName, number: contactPhone },
      ],
    });
    console.log(this.state.contact);
  };
  render() {
    const { onSubmitForm } = this;
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmitForm={onSubmitForm} />

        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Container>
    );
  }
}
