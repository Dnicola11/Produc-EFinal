package com.example2.DuplicadoSemana11;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

@Controller
public class HomeController {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@RequestMapping(value = "/")
	public String index() {
		return "index";
	}

	@GetMapping(path = "/api/ventadetalles/{id}/informacion")
	public @ResponseBody List<Map <String, Object>> informacion(@PathVariable Integer id){
		String sql = "SELECT ventadetalle.id as ID, producto.nombre as PRODUCTO, venta.total as VENTA, ventadetalle.cantidad as CANTIDAD FROM ventadetalle JOIN producto ON ventadetalle.id_producto=producto.id JOIN venta ON ventadetalle.id_venta=venta.id";
		List<Map <String, Object>> queryResult = jdbcTemplate.queryForList(sql);
		return queryResult;
	}

}

