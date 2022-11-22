package com.gestion.angar.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.gestion.angar.model.Usuario;
import com.gestion.angar.repositorio.UsuarioRepositorio;
import com.gestion.angar.service.UsuarioService;

@Service
public class UsuarioServiceImpl implements UsuarioService{
	
	private UsuarioRepositorio usuarioRepositorio;
	
	public UsuarioServiceImpl(UsuarioRepositorio usuarioRepositorio) {
		this.usuarioRepositorio = usuarioRepositorio;
	}

	@Override
	public List<Usuario> searchUsuarios(String query, String password) {
		List<Usuario> usuarios = usuarioRepositorio.searchUsuarios(query,password);
		return usuarios;
	}

}
