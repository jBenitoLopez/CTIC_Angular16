import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';

import { MyTwimpsComponent } from './my-twimps/my-twimps.component';
import { FovoriteTwimpsComponent } from './favorite-twimps/favorite-twimps.component';

const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    children: [
      {
        path: '',
        redirectTo: '/profile/my-twimps',
        pathMatch: 'full',
      },
      { path: 'my-twimps', component: MyTwimpsComponent },
      { path: 'favorite-twimps', component: FovoriteTwimpsComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  // exports: [RouterModule],
})
export class ProfileRoutingModule {}
// ng g m profile --routing
