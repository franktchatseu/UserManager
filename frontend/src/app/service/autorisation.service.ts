import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

//cette classe s'occupe de la gestion des authorisation
export class AutorisationService implements CanActivate {

  //redefinition de la methode canactivate
  canActivate(
    route:ActivatedRouteSnapshot,
    state:RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean{
      if(this.authservice.userauth.isauth){
        return true;
      }
      else{
        this.route.navigate(['/auth','signup']);
      }
      

  }
  constructor(private authservice:AuthService,
              private route:Router) { }


  

}
