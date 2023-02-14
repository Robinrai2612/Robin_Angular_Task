import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css'],
})
export class ButtonComponent {
  @Output()
  customevent: EventEmitter<number> = new EventEmitter<number>();

  emitevent(): void {
    this.customevent.emit(11);
  }
}
