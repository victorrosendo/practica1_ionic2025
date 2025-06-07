import { Component } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController, MenuController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  correo: string = "";
  clave: string = "";
  edad!: number;

  constructor(private menu: MenuController,private toastController: ToastController, private alertController: AlertController, private router: Router) {
    menu.enable(false);
  }

  iniciosesion(){
    if(this.correo == "a@a.cl" && this.clave == "123456"){
      //bienvenido al sistema
      this.presentToast("bottom","Bienvenido al Sistema");
      //variables de contexto
      let navigationExtras: NavigationExtras = {
        state : {
          correoEnviado: this.correo,
          claveEnviada: this.clave,
          texto: "Hola soy un texto enviado"
        }
      }
      //redigirgir a la pagina del menu
      this.router.navigate(['/menu'], navigationExtras);
    }
    else{
      //mensaje de error
      this.presentAlert("Usuario y/o Contraseña Incorrecta");
    }

  }
//soy un comentario
/* comentario largo */

async presentToast(position: 'bottom', msj: string) {
    const toast = await this.toastController.create({
      message: msj,
      duration: 2000,
      position: position,
    });

    await toast.present();
  }

   async presentAlert(msj:string) {
    const alert = await this.alertController.create({
      header: 'Login Incorrecto',
      message: msj,
      buttons: ['OK'],
    });

    await alert.present();
  }
}
