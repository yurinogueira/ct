import { Injectable, inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';


@Injectable()
export class CityPermissionService {

    constructor(public router: Router) { }

    canActivate(): boolean {
        const city = localStorage.getItem("city");
        if (city == null) {
            this.router.navigate(["cities"]).then(r => console.log(r));
        }
        return city != null;
    }

}

export const citiesGuard: CanActivateFn = (route, state) => {
    return inject(CityPermissionService).canActivate();
};
