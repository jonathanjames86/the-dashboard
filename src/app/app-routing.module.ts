import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainContainerComponent } from '../components/containers/main-container/main-container.component';
import { DashboardContainerComponent } from '../components/containers/dashboard-container/dashboard-container.component';

/* Routes are defined as an object consisting of the properties path, component (or the view), and optionally some data */
const routes: Routes = [
  { path: '', component: MainContainerComponent },
  { path: 'demo', component: DashboardContainerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
