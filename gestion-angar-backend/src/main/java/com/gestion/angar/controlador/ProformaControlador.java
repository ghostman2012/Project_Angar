package com.gestion.angar.controlador;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.angar.repositorio.ProformaRepositorio;
import com.gestion.angar.excepciones.ResourceNotFoundException;
import com.gestion.angar.model.*;

@RestController
@RequestMapping("/api/v1/proforma")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProformaControlador {
	@Autowired
	private ProformaRepositorio repositorio;
	
	@GetMapping("/listado")
	public List<Proforma> listarTodasLasProformas(){
		return repositorio.findAll();
	}
	
	@PostMapping("/registro")
	public Proforma guardarProforma(@RequestBody Proforma proforma) {
		return repositorio.save(proforma);
	}
	
	
	@DeleteMapping("/eliminar")
	public String eliminarProforma() {	
		repositorio.deleteAll();
		return "eliminacion exitosa";
	}
	

}
