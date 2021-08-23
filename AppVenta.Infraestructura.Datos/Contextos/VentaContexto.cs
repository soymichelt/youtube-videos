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
			options.UseCosmos(
				"https://appventascosmos.documents.azure.com:443/",
				"Robz80sxz81y0IIvXZpRXpmYDQxBIKn2ceh3zCgp9FvOaWn6ueNdUTugyAyrtQZrKTj5WqyQi2EA1W2cnnYHdQ==",
				"appventascosmos"
			);
		}

		protected override void OnModelCreating(ModelBuilder builder) {
			base.OnModelCreating(builder);

			builder.ApplyConfiguration(new ProductoConfig());
			builder.ApplyConfiguration(new VentaConfig());
			builder.ApplyConfiguration(new VentaDetalleConfig());
		}
	}
}
