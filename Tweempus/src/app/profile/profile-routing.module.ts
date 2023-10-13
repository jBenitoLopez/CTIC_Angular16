import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      { path: 'my-twimps', MyTwimpsComponent },
      { path: 'favorite-twimps', FavoriteTwimpsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class ProfileRoutingModule {}
//ng g m profile --routing
