import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { cliente } from 'src/app/model/cliente';
import { ListarService } from 'src/app/services/listar.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent {

  clientes = [
    {id:0, nombre:'', apellido:'', email:''}
  ]

  constructor(private listar:ListarService, private route:ActivatedRoute) {

    this.getAllClientes()

  }

  getAllClientes() {

    this.listar.getClientes().subscribe({

      next: res => {

        console.log(res)

        this.clientes = res

      },

      error: err => console.log(err)

    })

  }

}
