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


        Venda o1 = new Venda(null,"Ração","João", LocalDate.parse("2019-06-20"),100.00);
        Venda o2 = new Venda(null,"Vermifugo","Maria", LocalDate.parse("2022-12-15"),100.00);

        vendaRepository.save(o1);
        vendaRepository.save(o2);





    }
}
