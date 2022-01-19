import { Injectable } from '@angular/core';
import { ContactsData } from '../types/data';
import { contactsData } from '../data';
import { BehaviorSubject, Observable, of } from 'rxjs';
import {
  getContactsFromLocalStorage,
  updateContactsInLocalStorage,
} from './utils';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private _data: BehaviorSubject<ContactsData[]> = new BehaviorSubject<
    ContactsData[]
  >([]);

  public readonly data: Observable<ContactsData[]> = this._data.asObservable();

  loadInitialData(): void {
    if (!localStorage.getItem('contacts')) {
      console.log('loc1');
      updateContactsInLocalStorage(contactsData);
      this._data.next(contactsData);
    } else {
      console.log('loc2');
      this._data.next(getContactsFromLocalStorage());
    }
  }

  constructor() {
    this.loadInitialData();
  }

  addData(newContact: ContactsData) {
    this._data.next([...this._data.getValue(), newContact]);
    console.log(this._data);
    updateContactsInLocalStorage(this._data.value);
  }

  reset(): void {
    localStorage.setItem('contacts', JSON.stringify(contactsData));
    this._data.next(contactsData);
  }

  deleteContact(id: number) {
    const afterDelete = this._data.value.filter((el) => el.id !== id);
    this._data.next(afterDelete);
    updateContactsInLocalStorage(afterDelete);
  }

  editItem(editedContact: ContactsData) {
    console.log('editedContact', editedContact);
    const oldContactIndex = this._data.value.findIndex(
      (el) => el.id === editedContact.id
    );

    console.log('editedContacts', [...this._data.value]);
    console.log('oldContactIndex', oldContactIndex);
    const editedContacts = [...this._data.value];
    editedContacts.splice(oldContactIndex, oldContactIndex, editedContact);
    this._data.next(editedContacts);
  }
}
