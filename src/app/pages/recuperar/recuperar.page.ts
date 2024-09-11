import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {
    //Declarar el modelo
    login: any = {
      usuario: '',
    };


  //Variable para guardar campo vacio
  field: string = '';


  constructor(
    public alertController: AlertController,private router: Router) { }

  ngOnInit() {
  }

    //Validacion del modelo
    validateModel(model: any) {
      for (var [key, value] of Object.entries(model)) {
        if (value === '') {
          this.field = key;
          return false;
        }
      }
      return true;
    }

  //Funcion para mostrar la alerta
  mostrarAlerta() {
    this.presentAlert(
      'Listo :)',
      'Correo para recuperar tu contraseña enviado correctamente'
    );
  }

  //Creacion de alerta
  async presentAlert(msgHeader: string, msg: string) {
    const alert = await this.alertController.create({
      header: msgHeader,
      message: msg,
      buttons: [
        {
          text: 'Ok',
          handler: () => {
          },
        },
      ],
    });
    await alert.present();
  }

  Ingresar() {
    if (this.validateModel(this.login)) {
      this.mostrarAlerta();      
      this.router.navigate(['/login']);
    } else {
      this.presentAlert('Error', 'Falta el campo ' + this.field);
    }
  }

}
