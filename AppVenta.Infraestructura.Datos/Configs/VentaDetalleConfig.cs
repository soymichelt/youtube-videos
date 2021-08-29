using System;
using System.Collections.Generic;
using System.Text;

using AppVenta.Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppVenta.Infraestructura.Datos.Configs {
	class VentaDetalleConfig : IEntityTypeConfiguration<VentaDetalle> {
		public void Configure(EntityTypeBuilder<VentaDetalle> builder) {
			builder.ToTable("tblVentasDetalles");
			builder.HasKey(c => new { c.productoId, c.ventaId });

			builder
				.HasOne(detalle => detalle.Producto)
				.WithMany(producto => producto.VentaDetalles);

			builder
				.HasOne(detalle => detalle.Venta)
				.WithMany(venta => venta.VentaDetalles);


		}
	}
}
