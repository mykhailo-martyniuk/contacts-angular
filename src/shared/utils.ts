import { ContactsData } from '../types/data';

const CONTACTS_FIELD_NAME = 'contacts';

export const updateContactsInLocalStorage = (data: any) => {
  localStorage.setItem(CONTACTS_FIELD_NAME, JSON.stringify(data));
};
export const getContactsFromLocalStorage = (): ContactsData[] => {
  return JSON.parse(<string>localStorage.getItem(CONTACTS_FIELD_NAME));
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
