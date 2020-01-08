import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';
import userModel from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginguardService implements CanActivate {

  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    // current route
    let path = route.routeConfig.path;
    // nextRoute: collection of pages needed guard
    const nextRoute = ['operate/:id', 'account/:id', 'advanceOperate/:id', 'admin/:id', 'aidetect/:id', 'advanceAccount/:id'];
    let isLogin = userModel.isLogin;
    // when it is in nextRoute
    if (nextRoute.indexOf(path) >= 0) {
      if (!isLogin) {
        // havn't login
        this.router.navigate(['login']);
        return false;
      } else {
        // already login
        return true;
      }
    }
  }
}

