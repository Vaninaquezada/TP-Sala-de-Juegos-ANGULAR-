import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../servicios/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css'],
  providers: [AuthService]
})
export class CabeceraComponent  {
  public user$: Observable<any> = this.authService.afAuth.user;
  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) { }

 

  async onLogout() {
    try {
      await this.authService.logout();
      this.router.navigate(['/login']);
    }
    catch (error) {
      console.log(error);
    }
    
  }

}
