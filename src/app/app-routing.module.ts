import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { BookDetailComponent } from './components/book-detail/book-detail.component';

const routes: Routes = [

  { path: 'home', component:ListComponent },
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: '**', redirectTo:'/home'},
  { path: 'detail/:id', component: BookDetailComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
