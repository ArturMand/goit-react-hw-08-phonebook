import PropTypes from 'prop-types';
import { Btn, ListItem, Name, Phone } from './ContactList.styled';

const ContactList = ({ contactList, deleteContact }) => (
  <ul>
    {contactList.map(({ name, number, id }) => (
      <ListItem key={id}>
        <Name>{name}:</Name>
        <Phone>{number}</Phone>

        <Btn type="button" onClick={()=> deleteContact(name)}>
          delete
        </Btn>
      </ListItem>
    ))}
  </ul>
);

ContactList.propTypes = {
  deleteContact: PropTypes.func.isRequired,
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
};
export default ContactList;
