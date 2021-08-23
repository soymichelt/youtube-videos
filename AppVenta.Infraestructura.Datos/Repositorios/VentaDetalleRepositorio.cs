using System;
using System.Collections.Generic;
using System.Text;

using System.Linq;
using AppVenta.Dominio;
using AppVenta.Dominio.Interfaces.Repositorios;
using AppVenta.Infraestructura.Datos.Contextos;

namespace AppVenta.Infraestructura.Datos.Repositorios {
	public class VentaDetalleRepositorio : IRepositorioDetalle<VentaDetalle, Guid> {

		private VentaContexto db;

		public VentaDetalleRepositorio(VentaContexto _db) {
			db = _db;
		}

		public VentaDetalle Agregar(VentaDetalle entidad) {
			db.VentaDetalles.Add(entidad);
			return entidad;
		}

		public void GuardarTodosLosCambios() {
			db.SaveChanges();
		}
	}
}
