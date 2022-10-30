import PropTypes from 'prop-types';
import { Button, Container, Input, Label } from './ContactForm.styled';

const ContactFormMarkup = ({ onSubmit, handleChange, name, number }) => (
  <Container onSubmit={onSubmit}>
    <Label>
      name
      <Input
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />
    </Label>
    <Label htmlFor="">
      number
      <Input
        type="tel"
        name="number"
        value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
    </Label>
    <Button type="submit">add contact</Button>
  </Container>
);
ContactFormMarkup.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
export default ContactFormMarkup;
