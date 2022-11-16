import { useDispatch, useSelector } from 'react-redux';
import { deleteContacts } from 'Redux/contactsSlice/contactsSlice';
import { contactsSelector, filterSelector } from 'Redux/selectors/selectors';
import { Btn, ListItem, Name, Phone } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);
  const dispatch = useDispatch();

  const filteredContacts = () =>
    contacts.filter(({ name }) =>
      name.toLowerCase().includes(filter.toLowerCase())
    );

  return (
    <ul>
      {filteredContacts().map(({ name, number, id }) => (
        <ListItem key={id}>
          <Name>{name}:</Name>
          <Phone>{number}</Phone>
          <Btn type="button" onClick={() => dispatch(deleteContacts(id))}>
            delete
          </Btn>
        </ListItem>
      ))}
    </ul>
  );
};
