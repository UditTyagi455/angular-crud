import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



// lazy loading
const routes: Routes = [

  {path: "", component: HomeComponent},
  {path: "about",component: AboutComponent},
 
  // {path: "address",component: AddressComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
