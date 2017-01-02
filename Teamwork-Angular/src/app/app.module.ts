import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

//services
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';

//Pipes
import { SortPipe } from './pipes/sort.pipe';
import { FilterTitlePipe } from './pipes/filter-title.pipe';

// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleShortComponent } from './article-short/article-short.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';
import { TitleSearchComponent } from './title-search/title-search.component';
import { ArticlesSortByComponent } from './articles-sort-by/articles-sort-by.component';
import { ArticlesOrderByComponent } from './articles-order-by/articles-order-by.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';

import { AboutComponent } from './about/about.component';

import { AuthGuard } from './_guards/auth.guard';
import { CommentComponent } from './comments/comments.component';

@NgModule({
  declarations: [
    SortPipe,
    FilterTitlePipe,

    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewArticleComponent,
    ArticlesListComponent,
    ArticleShortComponent,
    ArticlesPageComponent,
    TitleSearchComponent,
    ArticlesSortByComponent,
    ArticlesOrderByComponent,
    ArticleDetailsComponent,

    AboutComponent

    CommentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ArticleService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
