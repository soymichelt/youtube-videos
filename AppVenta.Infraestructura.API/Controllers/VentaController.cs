using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

using AppVenta.Dominio;
using AppVenta.Aplicaciones.Servicios;
using AppVenta.Infraestructura.Datos.Contextos;
using AppVenta.Infraestructura.Datos.Repositorios;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace AppVenta.Infraestructura.API.Controllers {
	[Route("api/[controller]")]
	[ApiController]
	public class VentaController : ControllerBase {

		VentaServicio CrearServicio() {
			VentaContexto db = new VentaContexto();
			VentaRepositorio repoVenta = new VentaRepositorio(db);
			ProductoRepositorio repoProducto = new ProductoRepositorio(db);
			VentaDetalleRepositorio repoDetalle = new VentaDetalleRepositorio(db);
			VentaServicio servicio = new VentaServicio(repoVenta, repoProducto, repoDetalle);
			return servicio;
		}
		// GET: api/<VentaController>
		[HttpGet]
		public ActionResult<List<Venta>> Get() {
			var servicio = CrearServicio();
			return Ok(servicio.Listar());
		}

		// GET api/<VentaController>/5
		[HttpGet("{id}")]
		public ActionResult<Venta> Get(Guid id) {
			var servicio = CrearServicio();
			return Ok(servicio.SeleccionarPorID(id));
		}

		// POST api/<VentaController>
		[HttpPost]
		public ActionResult Post([FromBody] Venta venta) {
			var servicio = CrearServicio();
			servicio.Agregar(venta);
			return Ok("Venta guardada correctamente!!!!");
		}

		// DELETE api/<VentaController>/5
		[HttpDelete("{id}")]
		public ActionResult Delete(Guid id) {
			var servicio = CrearServicio();
			servicio.Anular(id);
			return Ok("Venta anulada correctamente!!!!!");
		}
	}
}
