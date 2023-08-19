package com.example2.DuplicadoSemana11;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DatabaseLoader implements CommandLineRunner {
    private final ProductoRepository repositoryP;
	private final VentaRepository repositoryV;
	private final VentaDetalleRepository repositoryVD;

	@Autowired 
	public DatabaseLoader(ProductoRepository repositoryP, VentaRepository repositoryV, VentaDetalleRepository repositoryVD) {
		this.repositoryP = repositoryP;
		this.repositoryV = repositoryV;
		this.repositoryVD = repositoryVD;
	}

	@Override
	public void run(String... strings) throws Exception {
		this.repositoryP.save(new Producto("Leche", 3.50));
		this.repositoryP.save(new Producto("Aceite",9.80));
		this.repositoryP.save(new Producto("Azucar",2.50));
		Producto pFideos = new Producto("Fideos", 4.60);
		this.repositoryP.save(pFideos);
		Producto pLent = new Producto("Lentejas", 4.20);
		this.repositoryP.save(pLent);

		Venta v1 = new Venta(23.0);
		this.repositoryV.save(v1);
		Venta v2 = new Venta(37.8);
		this.repositoryV.save(v2);
		this.repositoryV.save(new Venta(6.0));

		this.repositoryVD.save(new VentaDetalle(pFideos, v1, 5));
		this.repositoryVD.save(new VentaDetalle(pLent, v2, 9));
	
	}
}
