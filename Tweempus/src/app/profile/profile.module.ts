import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';

import { ProfileComponent } from './profile.component';

import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { FovoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';

@NgModule({
  declarations: [ProfileComponent, MyTwimpsComponent, FovoriteTwimpsComponent],
  imports: [CommonModule, ProfileRoutingModule, SharedModule],
})
export class ProfileModule {}
