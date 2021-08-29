using System;
using System.Collections.Generic;
using System.Text;

using AppVenta.Dominio.Interfaces;

namespace AppVenta.Dominio.Interfaces.Repositorios {
	public interface IRepositorioDetalle<TEntidad, TMovimientoID>
		: IAgregar<TEntidad>, ITransaccion {
	}
}
