import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { DataService } from '../../shared/data.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-create-new-contact',
  templateUrl: './create-new-contact.component.html',
  styleUrls: ['./create-new-contact.component.scss'],
})
export class CreateNewContactComponent implements OnInit {
  //isDisabled = true;
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() phoneNumber: string = '';
  @Input() email: string = '';
  @Input() address: string = '';
  @Input() dateOfBirth: string = '';
  @Input() isEdit: boolean = false;
  @Input() id: number | undefined = undefined;
  @Input() sidenav: any = undefined;

  @Output() edit = new EventEmitter();

  //isEnabledButton = false;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {}

  clear(): void {
    this.name = '';
    this.lastName = '';
    this.phoneNumber = '';
    this.email = '';
    this.address = '';
    this.dateOfBirth = '';
  }

  onClickAdd(): void {
    console.log(this.name, this.lastName, this.phoneNumber);
    if (this.name && this.lastName && this.phoneNumber) {
      console.log('onClickAdd');

      this.dataService.data
        .pipe(take(1))
        .subscribe((value) => (this.id = value[value.length - 1].id + 1));
      if (this.id !== undefined) {
        this.dataService.addData({
          id: this.id,
          name: this.name,
          lastName: this.lastName,
          phoneNumber: this.phoneNumber,
          email: this.email,
          address: this.address,
          dateOfBirth: this.dateOfBirth,
        });
      }
    }
    this.sidenav.toggle();
  }

  onClickEdit(): void {
    if (this.id !== undefined) {
      this.dataService.editItem({
        id: this.id,
        name: this.name,
        lastName: this.lastName,
        phoneNumber: this.phoneNumber,
        email: this.email,
        address: this.address,
        dateOfBirth: this.dateOfBirth,
      });
    }

    this.edit.emit();
  }
}
