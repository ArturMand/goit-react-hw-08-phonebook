import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  postContacts,
  delContact,
  getContacts,
} from '../../utils/fetchContacts';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async (_, { rejectWithValue }) => {
    try {
      return await getContacts();
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);

export const addContacts = createAsyncThunk(
  'contacts/addContacts',
  async (contact, { rejectWithValue }) => {
    try {
      return await postContacts(contact);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
export const deleteContact = createAsyncThunk(
  'contacts/deleteContacts',
  async (id, { rejectWithValue }) => {
    try {
      return await delContact(id);
    } catch (error) {
      rejectWithValue(error.message);
    }
  }
);
