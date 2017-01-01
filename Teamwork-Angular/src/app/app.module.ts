import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Routing
import { AppRoutingModule } from './app-routing.module';

//services
import { UserService } from './services/user.service';
import { ArticleService } from './services/article.service';
// Components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NewArticleComponent } from './new-article/new-article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleShortComponent } from './article-short/article-short.component';
import { ArticlesPageComponent } from './articles-page/articles-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    NewArticleComponent,
    ArticlesListComponent,
    ArticleShortComponent,
    ArticlesPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    UserService,
    ArticleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
