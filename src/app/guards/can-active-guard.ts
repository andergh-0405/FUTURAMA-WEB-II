import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth-service';

export const canActiveGuard: CanActivateFn = (route:ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  const servicioAuth = inject(AuthService);
  const router = inject(Router);

  if (servicioAuth.sesionIniciada()) {
    return true;
  }
  return router.parseUrl('/login');
};
