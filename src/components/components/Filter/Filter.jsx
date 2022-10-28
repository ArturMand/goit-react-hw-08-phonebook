import PropTypes from 'prop-types'
import { Input, Label } from '../ContactForm/ContactForm.styled';

const Filter = ({filterContact,filter}) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      name={filter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={filterContact}
    />
  </Label>
);
Filter.propTypes={
  filterContact: PropTypes.func.isRequired,
  name: PropTypes.string,
}
export default Filter;
