package com.gestion.angar.repositorio;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.gestion.angar.model.Producto;

@Repository
public interface ProductoRepositorio extends JpaRepository<Producto, Long>{

}
