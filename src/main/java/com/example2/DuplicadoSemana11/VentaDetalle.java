package com.example2.DuplicadoSemana11;


import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "ventadetalle")
public class VentaDetalle{

    private @Id @GeneratedValue Long id;

    @ManyToOne()
    @JoinColumn(name = "id_producto")
    private Producto producto;

    @ManyToOne()
    @JoinColumn(name = "id_venta")
    private Venta venta;

	private Integer cantidad;

	public VentaDetalle() {}

    public VentaDetalle(Producto producto, Venta venta, Integer cantidad) {
        this.producto = producto;
        this.venta = venta;
		this.cantidad = cantidad;
    }

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Producto getProducto() {
		return producto;
	}

	public void setProducto(Producto producto) {
		this.producto = producto;
	}

	public Venta getVenta() {
		return venta;
	}

	public void setVenta(Venta venta) {
		this.venta = venta;
	}

	public Integer getCantidad() {
		return cantidad;
	}

	public void setCantidad(Integer cantidad) {
		this.cantidad = cantidad;
	}

}
