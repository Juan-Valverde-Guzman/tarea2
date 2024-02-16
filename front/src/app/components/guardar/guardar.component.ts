import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { guardarcliente } from 'src/app/model/guardarcliente';
import { GuardarService } from 'src/app/services/guardar.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  form:FormGroup

  guardarcliente: guardarcliente = {

    nombre:'',

    apellido:'',

    email:''

  }

  constructor(private formBuilder:FormBuilder, private guardarservice:GuardarService) {

    this.form = this.formBuilder.group({

      "nombre": '',

      "apellido": '',

      "email": ''

    })

  }

  guardar() {

    this.guardarcliente.nombre = this.form.get('nombre')?.value

    this.guardarcliente.apellido = this.form.get('apellido')?.value

    this.guardarcliente.email = this.form.get('email')?.value

    this.guardarservice.postCliente(this.guardarcliente).subscribe({

      next: res => console.log(res),

      error: err => console.log(err)

    })

  }

}
