
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice/operations';
import {
  getContacts,
  getContactsFilter,
} from '../../redux/contactsSlice/contactsSelectors';
import {List,Item, Text, Link, Button } from './ContactList.styled'

const ContactList = () => {
  const dispatch = useDispatch();

  const filter = useSelector(getContactsFilter);
  const contacts = useSelector(getContacts);

  const filterContact = () => {
    const filterName = filter?.toLowerCase();
    return contacts.filter(({ name }) =>
      name.toLowerCase().includes(filterName)
    );
  };

  const filterContactList = filterContact();
  return (
    <List>
      {filterContactList.map(({ id, name, number }) => (
        <Item key={id} >
          <Text>
            {name}:
            <Link href={`tel:${number}`}>
              {number}
            </Link>
          </Text>
          <Button
            onClick={() => dispatch(removeContact(id))}
         
          >
            Delete
          </Button>
        </Item>
      ))}
    </List>
  );
};

export default ContactList;
