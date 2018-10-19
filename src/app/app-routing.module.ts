import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RouteGuardService } from "src/app/services/route-guard.service";

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
        loadChildren: "./buy/buy.module#BuyModule",
        canActivate: [RouteGuardService]
    },
	{
        path: 'sell',
        loadChildren: "./sell/sell.module#SellModule",
        canActivate: [RouteGuardService]
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
