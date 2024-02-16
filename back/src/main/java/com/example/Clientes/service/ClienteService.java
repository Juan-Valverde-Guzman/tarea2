package com.example.Clientes.service;

import com.example.Clientes.model.Cliente;
import com.example.Clientes.repository.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;

    public Cliente guardarCliente(Cliente cliente){ return clienteRepository.save(cliente); }

    public List<Cliente> listaCliente(){ return clienteRepository.findAll(); }
}
