package com.gestion.angar.service;
import java.util.List;

import com.gestion.angar.model.*;

public interface UsuarioService {
	
	List<Usuario> searchUsuarios(String query,String password);

}
