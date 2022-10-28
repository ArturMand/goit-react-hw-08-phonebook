import PropTypes from 'prop-types';
import { Button, Container, Input, Label } from './ContactForm.styled';

const ContactForm = ({ onSubmitForm }) => (
  <Container onSubmit={onSubmitForm}>
    <Label>
      name
      <Input
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
      />
    </Label>
    <Label htmlFor="">
      number
      <Input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
      />
    </Label>
    <Button type="submit">add contact</Button>
  </Container>
);
ContactForm.propTypes = {
  onSubmitForm: PropTypes.func.isRequired,
};
export default ContactForm;
