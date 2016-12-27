import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

// Components
import { HomeComponent } from './home/home.component';
import { LoginComponent} from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UserPanelComponent } from './user-panel/user-panel.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full'},
    { path: 'users/login', component: LoginComponent},
    { path: 'users/register', component: RegisterComponent},
    { path: 'users/user-panel', component: UserPanelComponent},
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
