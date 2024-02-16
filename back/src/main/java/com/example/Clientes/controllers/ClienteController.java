package com.example.Clientes.controllers;

import com.example.Clientes.model.Cliente;
import com.example.Clientes.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin({"*"})
@RequestMapping("/api/cliente")
public class ClienteController {

    @Autowired
    private ClienteService clienteService;

    @GetMapping
    public List<Cliente> list() { return this.clienteService.listaCliente(); }

    @PostMapping
    public Cliente save(@RequestBody Cliente cliente) { return this.clienteService.guardarCliente(cliente); }
}
