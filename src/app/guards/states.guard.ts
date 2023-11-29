import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable()
export class StatePermissionService {

    constructor(public router: Router) { }

    canActivate(): boolean {
        const state = localStorage.getItem("state");
        if (state == null) {
            this.router.navigate(["states"]).then(r => console.log(r));
        }
        return state != null;
    }

}

export const statesGuard: CanActivateFn = (route, state) => {
    return inject(StatePermissionService).canActivate();
};
