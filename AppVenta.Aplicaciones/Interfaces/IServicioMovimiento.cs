using System;
using System.Collections.Generic;
using System.Text;

using AppVenta.Dominio.Interfaces;

namespace AppVenta.Aplicaciones.Interfaces {
	public interface IServicioMovimiento<TEntidad, TEntidadID>
		: IAgregar<TEntidad>, IListar<TEntidad, TEntidadID>{
		void Anular(TEntidadID entidadId);
	}
}
