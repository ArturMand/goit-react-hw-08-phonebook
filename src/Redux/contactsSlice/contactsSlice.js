import { createSlice } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContact,
  fetchContacts,
} from '../contactsOperation/contactOperations';

const fetchContactsFulfilled = (state, { payload }) => {
  state.contacts.items = payload;
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const addContactFulfilled = (state, { payload }) => {
  state.contacts.items.push(payload);
  state.contacts.isLoading = false;
  state.contacts.error = null;
};

const deleteContactFulfilled = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = null;
  state.contacts.items = state.contacts.items.filter(
    ({ id }) => id !== payload.id
  );
};

const rejected = (state, { payload }) => {
  state.contacts.isLoading = false;
  state.contacts.error = payload;
};

const pending = state => {
  state.contacts.isLoading = true;
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: {
      items: [],
      isLoading: false,
      error: null,
    },
    filter: '',
  },
  reducers: {
    filterContact(state, { payload }) {
      state.filter = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchContacts.fulfilled, fetchContactsFulfilled)
      .addCase(fetchContacts.pending, pending)
      .addCase(fetchContacts.rejected, rejected)
      .addCase(addContacts.fulfilled, addContactFulfilled)
      .addCase(addContacts.pending, pending)
      .addCase(addContacts.rejected, rejected)
      .addCase(deleteContact.fulfilled, deleteContactFulfilled)
      .addCase(deleteContact.pending, pending)
      .addCase(deleteContact.rejected, rejected),
});

export default contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;
