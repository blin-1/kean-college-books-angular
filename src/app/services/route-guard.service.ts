import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { BlackboardService } from "src/app/services/blackboard.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class RouteGuardService implements CanActivate{
    
	constructor(private blackboard : BlackboardService, private router : Router) { }
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      
        if (this.blackboard.user.isLoggedIn()){
            return true;
        }else{
			this.router.navigateByUrl('/login');
			return false; 				
		}
       
    }

}
