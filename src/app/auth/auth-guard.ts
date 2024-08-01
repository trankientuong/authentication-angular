import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, GuardResult, MaybeAsync, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { map, Observable, take, tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private authService: AuthService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean | UrlTree> {
        return this.authService.user.pipe(
          take(1),
          map((user) => {
            const isAuth = !!user;
            if (isAuth) {
              return true;
            }
            return this.router.createUrlTree(['/auth']);
          })
          //   tap(isAuth  => {
          //     if (!isAuth) {
          //         this.router.navigate(['/auth']);
          //     }
          //   })
        );
    }
}