import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { User } from '../../interfaces/user';
import { FormGroup, FormControl } from '@angular/forms';
//para poder hacer las validaciones
//import { Validators, FormBuilder, FormControl, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[AuthService]
})
export class RegistroComponent  {
  mensajeError:string;
  registerForm = new FormGroup({
    email: new FormControl(''), 
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private router: Router) {}


  async onRegister() {
    const { email, password } = this.registerForm.value;
    try {
      const user = await this.authSvc.register(email, password);
      console.log(user);
      if (user) {
        this.router.navigate(['/Principal']);
     //   this.checkUserIsVerified(user);
      }else{
        this.mensajeError = "Direccion de mail no valida";

      }
    } catch (error) {
      console.log(this.mensajeError);
      this.mensajeError = "Direccion de mail o clave no validas ";
    }
  }
  /* private checkUserIsVerified(user: UserI) {
  if (user && user.emailVerified) {
      this.router.navigate(['/home']);
    } else if (user) {
      this.router.navigate(['/verification-email']);
    } else {
      this.router.navigate(['/register']);
    }
  }*/

}
