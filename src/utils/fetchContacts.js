import axios from 'axios';
axios.defaults.baseURL = 'https://6375531548dfab73a4f720a1.mockapi.io';

export const getContacts = async () => {
  const res = await axios.get('/contacts/contacts');
  return res.data;
};

export const postContacts = async contact => {
  const res = await axios.post('/contacts/contacts', contact);
  return res.data;
};
export const delContact = async id => {
  const res = await axios.delete(`/contacts/contacts/${id}`);
  return res.data;
};
