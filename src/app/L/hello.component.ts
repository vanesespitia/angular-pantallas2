import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  templateUrl: './l.html',
  styleUrls: ['./login.component.css']
})
export class HelloComponent  {
  @Input() name: string;
}
