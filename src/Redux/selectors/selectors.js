export const contactsSelector = state => state.contacts.contacts.items;
export const isContactsSelector = state =>
  state.contacts.contacts.items.length > 0;
export const filterSelector = state => state.contacts.filter;
