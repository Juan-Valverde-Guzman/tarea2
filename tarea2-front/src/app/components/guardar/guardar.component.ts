import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { guardarcliente } from 'src/app/model/guardarcliente';
import { GuardarService } from 'src/app/services/guardar.service';

@Component({
  selector: 'app-guardar',
  templateUrl: './guardar.component.html',
  styleUrls: ['./guardar.component.css']
})
export class GuardarComponent {

  guardarcliente: guardarcliente = {



  }

  constructor(private formBuilder:FormBuilder, private guardar:GuardarService) {

    this.form = this.formBuilder.group({

      "nombre": ''

    })

  }

  guardar() {

    this.guardarcliente

    this.guardar.postCliente(this.guardarcliente).subscribe({

      next: res => console.log(res),

      error: err => console.log(err)

    })

  }

}
