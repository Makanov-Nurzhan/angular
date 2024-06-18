import { inject } from "@angular/core"
import { AuthService } from "./auth.service"
import { Router } from "@angular/router"

export const canActivateAuth = () => {
    const isLogedIn = inject(AuthService).isAuth

    if (isLogedIn) {
        return true
    }
    return inject(Router).createUrlTree(['/login'])

}