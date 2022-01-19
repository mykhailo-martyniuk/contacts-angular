import { Component, OnInit } from '@angular/core';
import { ContactsData } from '../../types/data';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {
  contacts: Array<ContactsData> = [];
  searchName: string = '';
  searchLastName: string = '';
  searchPhoneNumber: string = '';

  addContact(contact: ContactsData): void {
    this.dataService.addData(contact);
  }

  search(param: any) {
    this.searchName = param.name;
    this.searchLastName = param.lastName;
    this.searchPhoneNumber = param.phoneNumber;

    console.log('searchLastName', this.searchLastName);
  }

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.data.subscribe((value) => (this.contacts = value));
  }
}
