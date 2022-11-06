import { useState } from 'react';
import PropTypes from 'prop-types';
import ContactFormMarkup from './ContactFormMarkup';
import { nanoid } from 'nanoid';

export default function ContactForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = (inputName, e) => {
    switch (inputName) {
      case 'name':
        setName(e.target.value);
        break;
      case 'number':
        setNumber(e.target.value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number, id: nanoid() });
    setName('');
    setNumber('');
  };

  return (
    <ContactFormMarkup
      onSubmit={handleSubmit}
      handleChange={handleChange}
      name={name}
      number={number}
    />
  );
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
