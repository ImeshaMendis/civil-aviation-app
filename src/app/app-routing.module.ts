import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LicensingComponent } from './licensing/licensing.component';
import { ExamsComponent } from './exams/exams.component';

const routes: Routes = [ 
  { path: 'licensing', component: LicensingComponent }, 
  { path: 'exams',  component: ExamsComponent },
  { path: '', redirectTo: '/exams', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
