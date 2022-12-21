package com.agrovetlapa.lapabackend.config;

import com.agrovetlapa.lapabackend.entities.Venda;
import com.agrovetlapa.lapabackend.repositories.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Configuration;

import java.time.LocalDate;

@Configuration
public class TestConfig implements CommandLineRunner {

    @Autowired
   private VendaRepository vendaRepository;

    @Override
    public void run(String... args) throws Exception {








    }
}
