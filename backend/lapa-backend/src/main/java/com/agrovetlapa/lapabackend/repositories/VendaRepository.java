package com.agrovetlapa.lapabackend.repositories;

import com.agrovetlapa.lapabackend.entities.Venda;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.time.LocalDate;
import java.util.List;

public interface VendaRepository extends JpaRepository<Venda,Long> {
    @Query("select obj FROM Venda obj WHERE obj.data = CURRENT_DATE ")
    Page<Venda> findTodaySales(Pageable pageable);

    @Query("SELECT  SUM(valor) FROM Venda WHERE data = CURRENT_DATE ")
    Double totalDia();

}
