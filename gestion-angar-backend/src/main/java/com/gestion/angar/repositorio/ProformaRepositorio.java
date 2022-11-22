package com.gestion.angar.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gestion.angar.model.Proforma;

@Repository
public interface ProformaRepositorio extends JpaRepository<Proforma, Long>{

}
