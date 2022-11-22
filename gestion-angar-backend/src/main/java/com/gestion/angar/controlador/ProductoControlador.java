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
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.gestion.angar.repositorio.ProductoRepositorio;
import com.gestion.angar.excepciones.ResourceNotFoundException;
import com.gestion.angar.model.*;

@RestController
@RequestMapping("/api/v1/producto")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class ProductoControlador {
	@Autowired
	private ProductoRepositorio repositorio;
	
	@GetMapping("/listado")
	public List<Producto> listarTodosLosProductos(){
		return repositorio.findAll();
	}
	
	@PostMapping("/registro")
	public Producto guardarProducto(@RequestBody Producto producto) {
		return repositorio.save(producto);
	}
	
	@GetMapping("/listado/{id}")
	public ResponseEntity<Producto> obtenerProductoPorId(@PathVariable Long id){
		Producto producto = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el producto con el ID: "+id));
		return ResponseEntity.ok(producto);
	}
	
	@PutMapping("/listado/{id}")
	public ResponseEntity<Producto> actualizarProducto(@PathVariable Long id,@RequestBody Producto detallesProducto){
		Producto producto = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el producto con el ID: "+id));
		producto.setNombre(detallesProducto.getNombre());
		producto.setCodLote(detallesProducto.getCodLote());
		producto.setCantidad(detallesProducto.getCantidad());
		producto.setPrecio(detallesProducto.getPrecio());
		producto.setColor(detallesProducto.getColor());
		producto.setTalla(detallesProducto.getTalla());
		producto.setModelo(detallesProducto.getModelo());
		
		Producto productoActualizado = repositorio.save(producto);
		
		return ResponseEntity.ok(productoActualizado);
	}
	
	@DeleteMapping("/listado/{id}")
	public ResponseEntity<Map<String,Boolean >> eliminarProducto(@PathVariable Long id){
		Producto producto = repositorio.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("No existe el producto con el ID: "+id));
		
		repositorio.delete(producto);
		Map<String,Boolean> respuesta = new HashMap<>();
		respuesta.put("eliminar", Boolean.TRUE);
		return ResponseEntity.ok(respuesta);
	}
				//.orElseThrow(() -> new ResourceNotFoundException("No existe el empleado con el ID: "+id));
}
