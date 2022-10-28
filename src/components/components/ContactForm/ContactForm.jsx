import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ContactFormMarkup from './ContactFormMarkup';
import { nanoid } from 'nanoid';

export default class ContactForm extends Component {
  static defaultProps = {
    onSubmit: PropTypes.func.isRequired,
  };
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value, id: nanoid() });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
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
        value={this.state.number}
      />
    );
  }
}
