import { useDispatch, useSelector } from 'react-redux';
import { filterContact } from 'Redux/contactsSlice/contactsSlice';
import { filterSelector } from 'Redux/selectors/selectors';
import { Input, Label } from '../ContactForm/ContactForm.styled';

export const Filter = () => {
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();
  return (
    <Label>
      Find contacts by name
      <Input
        type="text"
        name="filter"
        value={filter}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={e => dispatch(filterContact(e.target.value))}
      />
    </Label>
  );
};
