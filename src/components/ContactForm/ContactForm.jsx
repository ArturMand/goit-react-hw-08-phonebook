import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactFormMarkup from './ContactFormMarkup';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({ ...this.state, id: nanoid() });
    this.setState({ name: '', number: '' });
  };
  // checkContactListByName=()=>{

  // }
  render() {
    return (
      <ContactFormMarkup
        onSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        name={this.state.name}
        number={this.state.number}
      />
    );
  }
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
