package com.agrovetlapa.lapabackend.controller;

import com.agrovetlapa.lapabackend.entities.Cliente;
import com.agrovetlapa.lapabackend.services.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/cliente")
public class ClienteController {
    @Autowired
    ClienteService clienteService;

    @GetMapping(value = "/{nome}")
    public ResponseEntity<Cliente> findByName(@PathVariable String nome){
        Cliente obj = clienteService.findByName(nome);
        return ResponseEntity.ok().body(obj);
    }
    @GetMapping
    public ResponseEntity<List<Cliente>> findAll(){
        List<Cliente> clienteList = clienteService.findAll();
        return ResponseEntity.ok().body(clienteList);

    }

}
