import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TwimpCardComponent } from './twimp/twimp-card/twimp-card.component';
import { TwimpListComponent } from './twimp/twimp-list/twimp-list.component';
// import { SharedRoutingModule } from './shared-routing.module';
import { AuthorCardComponent } from './author/author-card/author-card.component';

@NgModule({
  declarations: [TwimpCardComponent, TwimpListComponent, AuthorCardComponent],
  imports: [CommonModule],
  exports: [TwimpListComponent, TwimpCardComponent, AuthorCardComponent],
})
export class SharedModule {}
