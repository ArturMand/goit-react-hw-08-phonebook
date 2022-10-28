import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm, ContactList, Filter } from './components/index';
import initialValue from './initialValue';
import { Container } from './PhoneBook.styled';
export default class App extends Component {
  state = initialValue;

  formSubmitHandler = data => {
    this.state.contact.some(({ name }) => name === data.name)
      ? Notify.failure(`${data.name} is already in contacts`)
      : this.setState({ contact: [...this.state.contact, data] });
  };

  filterContact = e => {
    this.setState({
      contact: [...this.state.contact,this.state.contact.filter(
        ({ name }) => name === this.state.filter
      )],
    });
  };

  deleteContact = conactName => {
    this.setState({
      contact: this.state.contact.filter(({ name }) => name !== conactName),
    });
  };
  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.formSubmitHandler} />

        <h2>Contacts</h2>
        <Filter
          filterContact={this.filterContact}
          filter={this.state.filter}
        />
        <ContactList
          contactList={this.state.contact}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
