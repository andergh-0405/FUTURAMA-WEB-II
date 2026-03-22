import { CanMatchFn, Router } from '@angular/router';
import { AuthService } from '../service/auth-service';
import { inject } from '@angular/core';

export const canMatchGuard: CanMatchFn = (route, segments) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  if (authService.rolActual() === 'ROLE_ADMIN') {
    return true;
  }
  router.navigate(['/personajes']); 
  return false;
};
