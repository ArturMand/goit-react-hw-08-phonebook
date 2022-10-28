import { Btn, ListItem, Name, Phone } from './ContactList.styled';

const ContactList = () => (
  <ul>
    <ListItem>
      <Name>asdasdasd:</Name>
      <Phone>123123</Phone>

      <Btn type="button">delete</Btn>
    </ListItem>
  </ul>
);

export default ContactList;
