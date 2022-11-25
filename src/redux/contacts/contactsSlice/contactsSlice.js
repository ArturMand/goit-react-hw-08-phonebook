import { createSlice } from '@reduxjs/toolkit';
import {
  addContact,
  removeContact,
  fetchContacts,
} from '../contactsOperation/operations.js';

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
      .addCase(addContact.fulfilled, addContactFulfilled)
      .addCase(addContact.pending, pending)
      .addCase(addContact.rejected, rejected)
      .addCase(removeContact.fulfilled, deleteContactFulfilled)
      .addCase(removeContact.pending, pending)
      .addCase(removeContact.rejected, rejected),
});

export default contactsSlice.reducer;
export const { filterContact } = contactsSlice.actions;

// import { createSlice } from '@reduxjs/toolkit';
// import {
//   addContact,
//   fetchContact,
//   removeContact,
// } from './operations.js';

// const handlePending = state => {
//   state.contacts.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.contacts.isLoading = false;
//   state.contacts.error = payload;
// };

// const contactsSlice = createSlice({
//   name: 'contacts',
//   initialState: {
//     contacts: {
//       items: [],
//       isLoading: false,
//       error: null,
//     },
//     filter: '',
//   },
//   reducers: {
//     filterContact(state, { payload }) {
//       state.filter = payload;
//     },
//   },
//   extraReducers: builder => {
//     builder
//       .addCase(fetchContact.pending, handlePending)
//       .addCase(addContact.pending, handlePending)
//       .addCase(removeContact.pending, handlePending)
//       .addCase(fetchContact.rejected, handleRejected)
//       .addCase(addContact.rejected, handleRejected)
//       .addCase(removeContact.rejected, handleRejected)
//       .addCase(fetchContact.fulfilled, (state, { payload }) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = payload;
//       })
//       .addCase(addContact.fulfilled, (state, { payload }) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items.push(payload);
//       })
//       .addCase(removeContact.fulfilled, (state, { payload }) => {
//         state.contacts.isLoading = false;
//         state.contacts.error = null;
//         state.contacts.items = state.contacts.items.filter(
//           el => el.id !== payload.id
//         );
//       });
//   },
// });
// export const { filterContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
