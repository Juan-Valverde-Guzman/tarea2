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

  cliente: cliente = {



  }

  clientes = [this.cliente]

  constructor(private listar:ListarService, private route:ActivatedRoute) {

    this.getAllClientes()

  }

  getAllClientes() {

    this.listar.getClientes().subscribe({

      next: res => {

        console.log(res)

        this.clientes

      },

      error: err => console.log(err)

    })

  }

}
