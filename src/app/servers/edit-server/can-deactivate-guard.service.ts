import {Observable} from 'rxjs/Observable';
import {ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot} from '@angular/router';

export interface CanComponentDeactive {
  canDeactivated: () => Observable<boolean> | Promise<boolean> | boolean ;
}
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactive> {
  canDeactivate(component: CanComponentDeactive,
                currentRoute: ActivatedRouteSnapshot,
                currentState: RouterStateSnapshot,
                nextState: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean {
    return component.canDeactivated();
  }
}
