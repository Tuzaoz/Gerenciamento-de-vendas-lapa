package com.agrovetlapa.lapabackend.controller;

import com.agrovetlapa.lapabackend.entities.Dia;
import com.agrovetlapa.lapabackend.entities.Venda;
import com.agrovetlapa.lapabackend.repositories.DiaRepository;
import com.agrovetlapa.lapabackend.repositories.VendaRepository;
import com.agrovetlapa.lapabackend.responses.VendaResponse;
import com.agrovetlapa.lapabackend.services.DiaService;
import com.agrovetlapa.lapabackend.services.VendaService;
import com.agrovetlapa.lapabackend.services.exceptions.NullKeySerializer;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.module.SimpleModule;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.time.LocalDate;
import java.util.*;

@RestController
@RequestMapping(value = "/vendas")
public class VendaController {
    @Autowired
    private VendaService vendaService;
    @Autowired
    private DiaService diaService;
    @Autowired
    private DiaRepository diaRepository;

    @GetMapping
    public ResponseEntity<List<Venda>> findAll() {
        List<Venda> list = vendaService.findAll();
        return ResponseEntity.ok().body(list);
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<Venda> findById(@PathVariable Integer id) {
        Venda obj = vendaService.findById(id);
        return ResponseEntity.ok().body(obj);
    }

    @GetMapping(value = "/hoje")
    public ResponseEntity<VendaResponse> dadosHoje(Pageable pageable) {
        Page<Venda> list = vendaService.findTodayDate(pageable);
        Double valor = vendaService.totalDia();
        VendaResponse response = new VendaResponse(list, valor);
        return ResponseEntity.ok().body(response);
    }

    @PostMapping(value = "/hoje")
    public ResponseEntity<Venda> insertVenda(@RequestBody Venda venda) {
        venda = vendaService.insert(venda);
        URI uri = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(venda.getId()).toUri();
        return ResponseEntity.created(uri).body(venda);
    }

    @GetMapping(value = "/visaogeral")
    public List<Dia> VendasByDateRange(@RequestParam(value = "minDate", defaultValue = "") String minDate,
                                       @RequestParam(value = "maxDate", defaultValue = "") String maxDate) {
        List<Venda> vendas = vendaService.getVendasByDateRange(minDate, maxDate);
        List<Dia> dias = diaService.getDiasByDateRange(minDate,maxDate);
        for (Venda venda : vendas
        ) {
            Dia dia = diaRepository.findDiaByData((venda.getData()));
            if (dia == null) {
                dia = new Dia();
                dia.setData(venda.getData());
                dias.add(dia);
            }
            dia.setTotalVendasCartao(0.0);
            dia.setTotalVendasDinheiroPix(0.0);
            dia.setTotalVendas(0.0);
            if (venda.getMetodoPagamento().equals("cartão")) {
                dia.setTotalVendasCartao(dia.getTotalVendasCartao() + venda.getValor());
            } else dia.setTotalVendasDinheiroPix(dia.getTotalVendasDinheiroPix() + venda.getValor());
            dia.setTotalVendas(dia.getTotalVendas() + venda.getValor());
            if (dia.getId() == null) {
                diaRepository.save(dia);
            }
        }
        return dias;
    }
}
