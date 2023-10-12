import { Component, Input } from '@angular/core';
import { Twimp } from '../twimp.model';

@Component({
  selector: 'tweenpus-twimp-card',
  templateUrl: './twimp-card.component.html',
  styleUrls: ['./twimp-card.component.css'],
})
export class TwimpCardComponent {
  @Input() twimp!: Twimp;
}
