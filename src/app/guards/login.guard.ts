import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {
  cookieValue: string;
  constructor (
    private cookieService: CookieService,
    private router: Router
  ) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
      this.cookieValue = this.cookieService.get('user');
      if(this.cookieValue) {
        return true;
      } else {
        this.router.navigate(['/login']);
        return false
      }
  }

}
