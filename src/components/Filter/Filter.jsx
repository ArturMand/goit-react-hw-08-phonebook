import { filterContact } from '../../redux/contactsSlice/contactsSlice';
import { getContactsFilter } from '../../redux/contactsSlice/contactsSelectors';
import { useSelector, useDispatch } from 'react-redux';
import { Box, TextField, Typography } from '@mui/material';
const Filter = () => {
  const filter = useSelector(getContactsFilter);
  const dispatch = useDispatch();
  return (
    <Box
      sx={{
        marginTop: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography component="h3"> Find contcts by name</Typography>

      <TextField
        size="small"
        name="filter"
        value={filter}
        onChange={e => dispatch(filterContact(e.currentTarget.value))}
      />
    </Box>
  );
};

export default Filter;
