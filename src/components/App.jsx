import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm, ContactList, Filter } from './components/index';
import { Container } from './PhoneBook.styled';
export default class App extends Component {
  state = {
    contact: [],
    filter: '',
  };

  formSubmitHandler = data => {
    this.state.contact.some(
      ({ name }) => name.toLowerCase().trim() === data.name.toLowerCase().trim()
    )
      ? Notify.failure(`${data.name} is already in contacts`)
      : this.setState({ contact: [...this.state.contact, data] });
  };
  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  filterContact = () => {
    const filter = this.state.filter.toLowerCase().trim();
    const filteredContactList = this.state.contact.filter(({ name }) =>
      name.toLowerCase().includes(filter)
    );
    return filteredContactList;
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
        <Filter filter={this.state.filter} handleChange={this.handleChange} />
        <ContactList
          contacts={this.filterContact()}
          deleteContact={this.deleteContact}
        />
      </Container>
    );
  }
}
