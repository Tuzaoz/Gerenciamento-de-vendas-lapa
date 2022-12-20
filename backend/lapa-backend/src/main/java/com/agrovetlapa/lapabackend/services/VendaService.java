package com.agrovetlapa.lapabackend.services;

import com.agrovetlapa.lapabackend.entities.Venda;
import com.agrovetlapa.lapabackend.repositories.VendaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cglib.core.Local;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class VendaService {
    @Autowired
    private VendaRepository vendaRepository;

    public List<Venda> findAll(){
        return vendaRepository.findAll();
    }

    public Page<Venda> findTodayDate(Pageable pageable){
        return vendaRepository.findTodaySales(pageable);
    }

    public Double totalDia(){
        return vendaRepository.totalDia();
    }
}

