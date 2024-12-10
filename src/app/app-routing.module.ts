import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ProfileComponent } from './profile/profile.component';
const routes: Routes = [
  { path: 'edit-user', component: EditUserComponent }, // Route pour accéder au composant
    { path: 'profile', component: ProfileComponent },

    { path: '', redirectTo: '/edit-user', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
