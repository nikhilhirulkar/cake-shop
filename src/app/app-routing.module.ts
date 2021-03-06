import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent }  from './login/login.component';
import { DashboardComponent }  from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SalesreportComponent } from './salesreport/salesreport.component';
import { AddtagComponent } from './addtag/addtag.component';



const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: AddProductComponent },
  { path: 'product', component: ProductListComponent },
  { path: 'sales-report', component: SalesreportComponent },
  { path: 'add-tag', component: AddtagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
