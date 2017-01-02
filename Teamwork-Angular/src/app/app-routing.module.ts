import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './_guards/auth.guard';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import {AboutComponent} from "./about/about.component";

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'users/login', component: LoginComponent},
    { path: 'users/register', component: RegisterComponent},
  
    { path: 'users/new-article', component: NewArticleComponent, canActivate: [AuthGuard]},
    { path: 'users/about', component: AboutComponent, canActivate: [AuthGuard]},
    { path: 'articles/:id', component: ArticleDetailsComponent, canActivate: [AuthGuard]},
    { path: 'articles', component: ArticlesPageComponent, canActivate: [AuthGuard]},

    { path: 'home', component: HomeComponent },

]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}
