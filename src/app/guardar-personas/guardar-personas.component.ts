import { Component } from '@angular/core';
import { GuardarPersonasService } from './guardar-personas-service.service';

@Component({
  selector: 'app-guardar-personas',
  templateUrl: './guardar-personas.component.html',
  providers:[GuardarPersonasService],
  styleUrls: ['./guardar-personas.component.css']
})

export class GuardarPersonasComponent {
clave= "";
  nombre= "";
  constructor(private guardarPersonas: GuardarPersonasService) {

}
findUser(clave:String){
  this.guardarPersonas.findUser(clave).subscribe(
    (user: any) => {
      console.log(user);
      this.nombre = user.nombre;
    },
    (err: any) => {
      console.log(err);
      alert("Ocurrió un error");
    }
  );
  
  }

  saveUser(){
    let user:any = {
      "nombre": "Yaret",
      "apellidoPaterno":"Diaz",
      "apellidoMaterno": "Jaimes",
      "identificacion": "789"
    }
    this.guardarPersonas.saveUser(user).subscribe(
      (user: any) => {
        console.log(user);
        this.nombre = user.nombre;
      }
    );
  }
}
