import { Component, OnInit } from '@angular/core';
import { Twimp } from '../twimp.model';
import { Author } from '../../author/author.model';

@Component({
  selector: 'tweenpus-twimp-list',
  templateUrl: './twimp-list.component.html',
  styleUrls: ['./twimp-list.component.css'],
})
export class TwimpListComponent implements OnInit {
  text: string =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam efficitur sodales libero, sit amet posuere arcu consectetur ut. Nam volutpat ligula ac nunc consectetur vestibulum.';
  twimps: Twimp[] = [];
  authors: Author[] = [];

  ngOnInit() {
    this.authors.push(new Author('1'));
    this.authors[0].fullname = 'David';

    this.twimps.push(
      new Twimp('1', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new Twimp('2', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new Twimp('3', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new Twimp('4', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new Twimp('5', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.push(
      new Twimp('6', '', this.authors[0], this.text, '01/01/2023')
    );
    this.twimps.forEach((twimp, index) => {
      if (index % 3 === 0) {
        twimp.favorite = true;
      }
    });
  }
}
