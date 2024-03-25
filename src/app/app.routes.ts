import { Routes } from '@angular/router';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { HomeComponent } from './home/home.component'
import { LoginComponent } from './login/login.component'

export const routes: Routes = [
    { path: 'blog/:id', component: BlogPostComponent },
    { path: 'login', component: LoginComponent , data: { text: 'Home Component hello angular route'}},
    { path: '**', redirectTo:'/login', pathMatch:'full'},
];

