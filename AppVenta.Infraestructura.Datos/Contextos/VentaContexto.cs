using System;
using System.Collections.Generic;
using System.Text;

using Microsoft.EntityFrameworkCore;
using AppVenta.Dominio;
using AppVenta.Infraestructura.Datos.Configs;

namespace AppVenta.Infraestructura.Datos.Contextos {
	public class VentaContexto : DbContext {

		string SERVER = Environment.GetEnvironmentVariable("SERVER");
		string PORT = Environment.GetEnvironmentVariable("PORT");
		string DATABASE = Environment.GetEnvironmentVariable("DATABASE");
		string USERNAME = Environment.GetEnvironmentVariable("USERNAME");
		string PASSWORD = Environment.GetEnvironmentVariable("PASSWORD");

		public VentaContexto() {
			this.Database.EnsureCreated();
		}

		public DbSet<Producto> Productos { get; set; }

		public DbSet<Venta> Ventas { get; set; }

		public DbSet<VentaDetalle> VentaDetalles { get; set; }

		protected override void OnConfiguring(DbContextOptionsBuilder options) {
			options.UseSqlServer($"Server={SERVER},{PORT};Initial Catalog={DATABASE};Persist Security Info=False;User ID={USERNAME};Password={PASSWORD};MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
		}

		protected override void OnModelCreating(ModelBuilder builder) {
			base.OnModelCreating(builder);

			builder.ApplyConfiguration(new ProductoConfig());
			builder.ApplyConfiguration(new VentaConfig());
			builder.ApplyConfiguration(new VentaDetalleConfig());
		}
	}
}
