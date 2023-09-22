import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './component/blog/blog.component';
import { CounterComponent } from './component/counter/counter.component';
import { EditblogComponent } from './component/editblog/editblog.component';
import { HomeComponent } from './component/home/home.component';
import { AuthGuard } from './Guard/auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"counter",component:CounterComponent,canActivate:[AuthGuard]},
  {path:"blog",component:BlogComponent,canActivate:[AuthGuard]},
  {path:"blog/edit/:id",component:EditblogComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
