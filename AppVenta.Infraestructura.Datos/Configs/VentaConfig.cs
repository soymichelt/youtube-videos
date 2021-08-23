using System;
using System.Collections.Generic;
using System.Text;

using AppVenta.Dominio;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace AppVenta.Infraestructura.Datos.Configs {
	class VentaConfig : IEntityTypeConfiguration<Venta> {
		public void Configure(EntityTypeBuilder<Venta> builder) {
			builder.ToTable("tblVentas");
			builder.HasKey(c => c.ventaId);

			builder
				.HasMany(venta => venta.VentaDetalles)
				.WithOne(detalle => detalle.Venta);
		}
	}
}
