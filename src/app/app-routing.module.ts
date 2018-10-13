import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
    {
        path: 'welcome',
        loadChildren: "./welcome/welcome.module#WelcomeModule"
    },
    {
        path: 'login',
        loadChildren: "./login/login.module#LoginModule"
    },
    {
        path: 'browse',
        loadChildren: "./browse/browse.module#BrowseModule"
    },
	{
        path: 'buy',
        loadChildren: "./buy/buy.module#BuyModule"
    },
	{
        path: 'sell',
        loadChildren: "./sell/sell.module#SellModule"
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
