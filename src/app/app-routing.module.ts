import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { SubmitComponent } from './pages/supplier/submit.component';
import { ProductComponent } from './pages/product/product.component';
import { HospitalComponent } from './pages/hospital/hospital.component';
import { NeedComponent } from './pages/need/need.component';
import { ProductlistComponent } from './pages/productlist/productlist.component';
import { ProductinfoComponent } from './pages/productinfo/productinfo.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';


const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'supplier', component: SubmitComponent},
  { path: 'product', component: ProductComponent},
  { path: 'hospital', component: HospitalComponent},
  { path: 'need', component: NeedComponent},
  { path: 'productlist', component: ProductlistComponent},
  { path: 'productinfo', component: ProductinfoComponent},
  { path: 'welcome', component: WelcomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
