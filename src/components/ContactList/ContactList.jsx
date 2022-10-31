import PropTypes from 'prop-types';
import { Btn, ListItem, Name, Phone } from './ContactList.styled';

const ContactList = ({ contacts, deleteContact }) => (
  <ul>
    { contacts.map(({ name, number, id }) => (
      <ListItem key={id}>
        <Name>{name}:</Name>
        <Phone>{number}</Phone>

        <Btn type="button" onClick={()=> deleteContact(id)}>
          delete
        </Btn>
      </ListItem>
    ))}
  </ul>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired
  ).isRequired,
};
export default ContactList;
