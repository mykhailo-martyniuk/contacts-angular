import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs';
import { DataService } from '../../shared/data.service';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent implements OnInit {
  name: string = '';
  lastName: string = '';
  phoneNumber: string = '';
  email: string = '';
  address: string = '';
  dateOfBirth: string = '';
  isEdit: boolean = false;

  id: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}
  ngOnInit() {
    console.log('init:');

    this.route.paramMap
      .pipe(switchMap((params) => params.getAll('id')))
      .subscribe((data) => (this.id = +data));
    if (this.id !== undefined) {
      this.dataService.data.subscribe((value) => {
        const contact = value.find((el) => el.id === this.id);
        console.log('contact:', contact);
        if (contact) {
          console.log('sssssssss');
          this.name = contact.name;
          this.lastName = contact.lastName;
          this.phoneNumber = contact.phoneNumber;
          this.email = contact.email;
          this.address = contact.address;
          this.dateOfBirth = contact.dateOfBirth;
        }
      });
    }
  }

  deleteContact() {
    this.dataService.deleteContact(<number>this.id);
  }

  onEdit() {
    this.isEdit = !this.isEdit;
  }
}
