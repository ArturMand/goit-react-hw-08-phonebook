import PropTypes from 'prop-types';
import { Input, Label } from '../ContactForm/ContactForm.styled';

const Filter = ({ filter, handleChange }) => (
  <Label>
    Find contacts by name
    <Input
      type="text"
      name="filter"
      value={filter}
      pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
      required
      onChange={handleChange}
    />
  </Label>
);
Filter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string,
};
export default Filter;
