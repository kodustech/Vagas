import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { ResgisterComponent } from "./pages/resgister/resgister.component";

const routes: Routes = [
  { path: "*", component: DashboardComponent },
  { path: "dashboard", component: DashboardComponent },
  { path: "register", component: ResgisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
