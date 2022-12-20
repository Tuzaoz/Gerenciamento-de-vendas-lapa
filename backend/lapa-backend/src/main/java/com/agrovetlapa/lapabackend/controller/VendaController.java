package com.agrovetlapa.lapabackend.controller;

import com.agrovetlapa.lapabackend.entities.Venda;
import com.agrovetlapa.lapabackend.entities.VendaResponse;
import com.agrovetlapa.lapabackend.services.VendaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(value = "/vendas")
public class VendaController {
    @Autowired
    private VendaService vendaService;

    @GetMapping
    public ResponseEntity<List<Venda>> findAll(){
        List<Venda> list = vendaService.findAll();
        return ResponseEntity.ok().body(list);
    }

    public ResponseEntity<Page<Venda>> findHoje(Pageable pageable){
        Page<Venda> list = vendaService.findTodayDate(pageable);
        return ResponseEntity.ok().body(list);
    }
    @GetMapping(value = "/hoje")
    public ResponseEntity<VendaResponse> dadosHoje(Pageable pageable){
        Page<Venda> list = vendaService.findTodayDate(pageable);
        Double valor = vendaService.totalDia();
        VendaResponse response = new VendaResponse(list,valor);
        return ResponseEntity.ok().body(response);
    }

}
