import React, { Component } from 'react';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { ContactForm, ContactList, Filter } from './index';
import { Container } from './PhoneBook.styled';
const LS_KEY = 'contacts';
export default class App extends Component {
  state = {
    contact: JSON.parse(localStorage.getItem(LS_KEY)) ?? [],
    filter: '',
  };

  componentDidUpdate(_, prevState) {
    if (prevState.contact !== this.state.contact) {
      localStorage.setItem(LS_KEY, JSON.stringify(this.state.contact));
    }
  }

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

  deleteContact = conactId => {
    this.setState({
      contact: this.state.contact.filter(({ id }) => id !== conactId),
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
