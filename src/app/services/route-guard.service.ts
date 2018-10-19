import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { BlackboardService } from "src/app/services/blackboard.service";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate{
    
    requestedUrl : string = null;
    urlWasRequested: any = function () {

        return this.requestedUrl !== null? true : false;
        
    };
    
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
      
        if (this.blackboard.user.isLoggedIn()){
            if (this.urlWasRequested()){
                //FIXME
                /**
                this.router.navigate([this.requestedUrl]);
                this.requestedUrl = null;
                */
            }

            return true;
        }
        this.requestedUrl=state.url;
        this.router.navigate(['/login']);
        return false;        
    }

  constructor(private blackboard : BlackboardService, private router : Router) { }
}
