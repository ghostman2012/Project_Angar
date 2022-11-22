package com.gestion.angar.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "proforma")
public class Proforma {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProforma;

	@Column(name = "idProducto")
	private Long idProducto;

	@Column(name = "nombre")
	private String nombre;

	@Column(name = "codLote")
	private String codLote;
	
	@Column(name = "cantidad")
	private int cantidad;
	
	@Column(name = "precio")
	private Double precio;
	
	@Column(name = "color")
	private String color;
	
	@Column(name = "talla")
	private String talla;
	
	@Column(name = "modelo")
	private String modelo;
	
	@Column(name = "cantidadUsuario")
	private int cantidadUsuario;
	
	public Proforma() {
		super();
	}
	
	public Proforma(Long idProforma, Long idProducto, String nombre, String codLote, int cantidad, Double precio,
			String color, String talla, String modelo, int cantidadUsuario) {
		super();
		this.idProforma = idProforma;
		this.idProducto = idProducto;
		this.nombre = nombre;
		this.codLote = codLote;
		this.cantidad = cantidad;
		this.precio = precio;
		this.color = color;
		this.talla = talla;
		this.modelo = modelo;
		this.cantidadUsuario = cantidadUsuario;
	}

	public int getCantidadUsuario() {
		return cantidadUsuario;
	}

	public void setCantidadUsuario(int cantidadUsuario) {
		this.cantidadUsuario = cantidadUsuario;
	}

	public Long getIdProforma() {
		return idProforma;
	}

	public void setIdProforma(Long idProforma) {
		this.idProforma = idProforma;
	}

	public Long getIdProducto() {
		return idProducto;
	}

	public void setIdProducto(Long idProducto) {
		this.idProducto = idProducto;
	}

	public String getNombre() {
		return nombre;
	}

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}

	public String getCodLote() {
		return codLote;
	}

	public void setCodLote(String codLote) {
		this.codLote = codLote;
	}

	public int getCantidad() {
		return cantidad;
	}

	public void setCantidad(int cantidad) {
		this.cantidad = cantidad;
	}

	public Double getPrecio() {
		return precio;
	}

	public void setPrecio(Double precio) {
		this.precio = precio;
	}

	public String getColor() {
		return color;
	}

	public void setColor(String color) {
		this.color = color;
	}

	public String getTalla() {
		return talla;
	}

	public void setTalla(String talla) {
		this.talla = talla;
	}

	public String getModelo() {
		return modelo;
	}

	public void setModelo(String modelo) {
		this.modelo = modelo;
	}


}