package com.agrovetlapa.lapabackend.services;

import com.agrovetlapa.lapabackend.repositories.ClienteRepository;
import org.springframework.beans.factory.annotation.Autowired;

public class ClienteService {
    @Autowired
    ClienteRepository clienteRepository;
}
