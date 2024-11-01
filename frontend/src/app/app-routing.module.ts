import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CategoryComponent } from './pages/category/category.component';
import { PostComponent } from './pages/post/post.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default route
  { path: 'category/:id', component: CategoryComponent },
  { path: 'post/:id', component: PostComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Wildcard ** for route any other path match
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
