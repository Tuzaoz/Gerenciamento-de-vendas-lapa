package com.agrovetlapa.lapabackend.config;

import com.agrovetlapa.lapabackend.entities.Cliente;
import com.agrovetlapa.lapabackend.entities.Venda;
import com.agrovetlapa.lapabackend.repositories.ClienteRepository;
import com.agrovetlapa.lapabackend.repositories.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;
import java.time.LocalDate;

@Configuration
public class TestConfig implements CommandLineRunner {

    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private VendaRepository vendaRepository;

    @Override
    public void run(String... args) throws Exception {
        Cliente cliente1 = new Cliente(null, "Arthur", "48999342114");
        clienteRepository.save(cliente1);
        Venda venda = new Venda(null,"Ração",cliente1, LocalDate.now(), 30.00, "Ração", "Pix");
        vendaRepository.save(venda);







    }
}
