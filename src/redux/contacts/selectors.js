import { createSelector } from '@reduxjs/toolkit';

export const getLoading = state => state.phonebook.loading;

export const getFilter = state => state.phonebook.filter;

export const getAllContacts = state => state.phonebook.items;

export const getFilteredContacts = createSelector(
  [getFilter, getAllContacts],
  (filter, contacts) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  },
);
