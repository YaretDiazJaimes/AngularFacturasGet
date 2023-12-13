import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GuardarPersonasService } from './guardar-personas-service.service';
import { CommonModule } from '@angular/common'; // Agrega esta importación
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-guardar-personas',
  templateUrl: './guardar-personas.component.html',
  providers: [GuardarPersonasService],
  styleUrls: ['./guardar-personas.component.css'],
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule]  // Agrega CommonModule a los imports
})
export class GuardarPersonasComponent implements OnInit {
  userForm!: FormGroup;

  clave = "";
  nombre = "";

  constructor(private fb: FormBuilder, private guardarPersonas: GuardarPersonasService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.fb.group({
      nombre: ['', Validators.required],
      apellidoPaterno: ['', Validators.required],
      apellidoMaterno: ['', Validators.required],
      identificacion: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
    });
  
  }

  findUser(clave: string) {
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

  saveUser() {
    if (this.userForm.valid) {
      const user = this.userForm.value;
      this.guardarPersonas.saveUser(user).subscribe(
        (response: any) => {
          console.log(response);
          this.nombre = response.nombre;
    
          this.userForm.reset();
        },
        
      );
    }
  }
}