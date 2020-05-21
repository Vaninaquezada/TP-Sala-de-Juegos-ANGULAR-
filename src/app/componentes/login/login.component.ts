import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../servicios/auth.service';
import { User } from '../../interfaces/user';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl } from '@angular/forms';
import { Subscription } from "rxjs";
import { TimerObservable } from "rxjs/observable/TimerObservable";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [AuthService]
})
export class LoginComponent {
  mensajeError: string;
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
 
usuarioLogin:any;

  private subscription: Subscription;
  usuario = '';
  clave = '';
  progreso: number;
  progresoMensaje = "esperando...";
  logeando = true;
  ProgresoDeAncho: string;

  clase = "progress-bar progress-bar-info progress-bar-striped ";


  constructor(
    private authService: AuthService,
    private route: ActivatedRoute,
    private router: Router) {
    this.progreso = 0;
    this.ProgresoDeAncho = "0%";
    console.log({email:"usuario@usuario.com",password:"123456"});
  }

  Entrar() {
    if (this.usuario === 'admin' && this.clave === 'admin') {
      this.router.navigate(['/Principal']);
    }
  }
  MoverBarraDeProgreso() {

    this.logeando = false;
    this.clase = "progress-bar progress-bar-danger progress-bar-striped active";
    this.progresoMensaje = "NSA spy...";
    let timer = TimerObservable.create(200, 50);
    this.subscription = timer.subscribe(t => {
      console.log("inicio");
      this.progreso = this.progreso + 1;
      this.ProgresoDeAncho = this.progreso + 20 + "%";
      switch (this.progreso) {
        case 15:
          this.clase = "progress-bar progress-bar-warning progress-bar-striped active";
          this.progresoMensaje = "Verificando ADN...";
          break;
        case 30:
          this.clase = "progress-bar progress-bar-Info progress-bar-striped active";
          this.progresoMensaje = "Adjustando encriptación..";
          break;
        case 60:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando Info del dispositivo..";
          break;
        case 75:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Recompilando claves facebook, gmail, chats..";
          break;
        case 85:
          this.clase = "progress-bar progress-bar-success progress-bar-striped active";
          this.progresoMensaje = "Instalando KeyLogger..";
          break;

        case 100:
          console.log("final");
          this.subscription.unsubscribe();
          this.onLogin();
          //this.Entrar();
          break;
      }
    });
    //this.logeando=true;
  }
  /*
    onLogin(form): void {
        console.log('Form->',this.loginForm.value);
    }
  */

 onChange(selected:any){
     
  console.log("lalala");
 
 switch (selected) {
   case "admin":
    
     this.loginForm.setValue({email:"usuario@usuario.com",password:"123456"});
    
     console.log(this.loginForm.value);

     break;
   case "fulanito":
     this.usuario="fulanito@user.com";
     this.clave="222222";

       break;
 }
 
 const { email, password } = {email:this.usuario,password:this.clave};
 this.loginForm.setValue({ email, password });
 console.log(this.loginForm.value);
}


  async onLogin() {

    const { email, password } = this.loginForm.value;
    console.log('Form->', this.loginForm.value);
    try {
      const user = await this.authService.login(email, password);
      if (user) {
        this.router.navigate(['/Principal']);
      } else {

        this.mensajeError = "Usuario erroneo";
        this.logeando = true;
      }
    }
    catch (error) { console.log("Error en login" + error) }

  }
}
