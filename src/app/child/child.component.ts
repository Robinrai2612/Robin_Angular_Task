import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  @Output()
  customevent: EventEmitter<number> = new EventEmitter<number>();
  emitevent(a: number) {
    this.customevent.emit(11);
  }
  @Input() myinputMsg: string = '';

  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage: string = 'I am child component.';
  consructor() {}
  ngOnInit(): void {
    console.log(this.myinputMsg);
  }
  sendValues() {
    this.myOutput.emit(this.outputMessage);
  }
}
