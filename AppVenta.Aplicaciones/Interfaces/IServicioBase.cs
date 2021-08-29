using System;
using System.Collections.Generic;
using System.Text;

using AppVenta.Dominio.Interfaces;

namespace AppVenta.Aplicaciones.Interfaces {
	interface IServicioBase<TEntidad, TEntidadID>
		: IAgregar<TEntidad>, IEditar<TEntidad>, IEliminar<TEntidadID>, IListar<TEntidad, TEntidadID>{
	}
}
