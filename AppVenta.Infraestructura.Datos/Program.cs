using System;

using AppVenta.Infraestructura.Datos.Contextos;

namespace AppVenta.Infraestructura.Datos {
	class Program {
		static void Main(string[] args) {
			Console.WriteLine("Creando la DB si no existe...");
			VentaContexto db = new VentaContexto();
			db.Database.EnsureCreated();
			Console.WriteLine("Listo!!!!!");
			Console.ReadKey();
		}
	}
}
