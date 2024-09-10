import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  constructor(
    public alertController: AlertController,private router: Router) { }

  ngOnInit() {
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
            this.router.navigate(['/login']);
          },
        },
      ],
    });
    await alert.present();
  }

}
