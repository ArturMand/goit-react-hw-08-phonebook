import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'Redux/contactsOperation/contactOperations';
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
      {filteredContacts().map(({ name, phone, id }) => (
        <ListItem key={id}>
          <Name>{name}:</Name>
          <Phone>{phone}</Phone>
          <Btn type="button" onClick={() => dispatch(deleteContact(id))}>
            delete
          </Btn>
        </ListItem>
      ))}
    </ul>
  );
};
