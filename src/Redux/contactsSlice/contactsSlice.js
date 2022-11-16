import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContacts: (state, { payload }) => {
      state.contacts.push(payload);
    },

    deleteContacts: (state, { payload }) => {
      state.contacts = state.contacts.filter(({ id }) => id !== payload);
    },

    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
});

export default contactsSlice.reducer;
export const { addContacts, deleteContacts, filterContact } =
  contactsSlice.actions;
