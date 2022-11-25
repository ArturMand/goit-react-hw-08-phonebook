import { useState } from 'react';
import { addContact } from '../../redux/contactsSlice/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/contactsSlice/contactsSelectors';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { BtnAdd } from './ContactForm.styled';

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    contacts.some(
      contact => contact.name.trim().toLowerCase() === name.trim().toLowerCase()
    )
      ? alert(`${name} is already in contacts `)
      : dispatch(addContact({ name, number }));
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  const theme = createTheme();

  return (
    <ThemeProvider theme={theme}>
      {' '}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          onSubmit={handleSubmit}
          component="form"
          noValidate
          sx={{ mt: 1, width: '360px' }}
        >
          <TextField
            type="text"
            name="name"
            id="name"
            value={name}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            onChange={e => setName(e.target.value)}
            margin="normal"
            fullWidth
            placeholder="name"
            label="Name "
            autoComplete="Name"
            autoFocus
            size="small"
          />

          <TextField
            type="tel"
            name="number"
            id="number"
            value={number}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            margin="normal"
            fullWidth
            placeholder="+380"
            label="Number "
            autoComplete="Number"
            autoFocus
            size="small"
            onChange={e => setNumber(e.target.value)}
          />
          <BtnAdd
            type="submit"
            fullWidth
            variant="outline"
            sx={{ mt: 3, mb: 2 }}
          >
            Add contact
          </BtnAdd>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
export default ContactForm;
