import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { BuyComponent } from './buy/buy.component';
import { SellComponent } from './sell/sell.component';

const routes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'browse',
        loadChildren: "./browse/browse.module#BrowseModule"
    },
	{
        path: 'buy',
        component: BuyComponent
    },
	{
        path: 'sell',
        component: SellComponent
    },
    {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/welcome',
        pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
