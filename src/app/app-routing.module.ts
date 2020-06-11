import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SearchComponent } from './search/search.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
  path: "",
  component: HomeComponent
},
{
  path: "user/:userName",
  component: ProfileComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
