import { Component, Input } from '@angular/core';
import { DataService } from '../../shared/data.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  @Input() name: string = '';
  @Input() lastName: string = '';
  @Input() phoneNumber: string = '';
  @Input() id: number = 0;

  constructor(private dataService: DataService) {}

  sleep(milliseconds: number) {
    const t = new Date().getTime();
    let i = 0;
    while (new Date().getTime() - t < milliseconds) {
      i++;
    }
  }

  deleteContact(event:  MouseEvent) {
    event.preventDefault();
    this.dataService.deleteContact(this.id);
  }
}
