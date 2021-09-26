using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.EntityFrameworkCore;
using AppVenta.Dominio;
using AppVenta.Infraestructura.Datos.Configs;

namespace AppVenta.Infraestructura.Datos.Contextos {
	public class VentaContexto : DbContext {
		public DbSet<Producto> Productos { get; set; }

		public DbSet<Venta> Ventas { get; set; }

		public DbSet<VentaDetalle> VentaDetalles { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder options) {
			options.UseSqlServer("Server=tcp:serverappventa.database.windows.net,1433;Initial Catalog=app-venta;Persist Security Info=False;User ID=adminappventa;Password=Channel321*;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
		}

		protected override void OnModelCreating(ModelBuilder builder) {
			base.OnModelCreating(builder);

			builder.ApplyConfiguration(new ProductoConfig());
			builder.ApplyConfiguration(new VentaConfig());
			builder.ApplyConfiguration(new VentaDetalleConfig());
		}
	}
}
