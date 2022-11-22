package com.gestion.angar.repositorio;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.gestion.angar.model.Usuario;

@Repository
public interface UsuarioRepositorio extends JpaRepository<Usuario, Long>{
	@Query(value = "SELECT * FROM usuario e where e.usuario = :query and e.contrasena= :password", nativeQuery = true)
    List<Usuario> searchUsuarios(String query, String password);

}
