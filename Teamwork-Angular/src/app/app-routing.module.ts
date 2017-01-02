import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'users/login', component: LoginComponent},
    { path: 'users/register', component: RegisterComponent},
    { path: 'users/new-article', component: NewArticleComponent},
    { path: 'articles/:id', component: ArticleDetailsComponent},
    { path: 'articles', component: ArticlesPageComponent},
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
