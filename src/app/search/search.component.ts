import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  phoneNumber: string = '';

  @Output() searchChange = new EventEmitter();

  clear() {
    this.name = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.search();
  }

  search() {
    console.log('change');
    this.searchChange.emit({
      name: this.name,
      lastName: this.lastName,
      phoneNumber: this.phoneNumber,
    });
  }
  constructor() {}

  ngOnInit(): void {}
}
