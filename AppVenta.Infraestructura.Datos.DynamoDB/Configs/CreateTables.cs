using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Text;
using Amazon;
using Amazon.DynamoDBv2;
using Amazon.DynamoDBv2.DataModel;
using Amazon.DynamoDBv2.DocumentModel;
using Amazon.DynamoDBv2.Model;
using Amazon.Runtime;

namespace AppVenta.Infraestructura.Datos.DynamoDB.Configs {
	class CreateTables {
		public AmazonDynamoDBClient GetClient() {
			var credentials = new BasicAWSCredentials("AKIAUFPXJJCBKFPYIRX5", "cI5jWMxocFfHUQTwWyIwy8CvRRxi88cY/RZB8lqq");
			var client = new AmazonDynamoDBClient(credentials, RegionEndpoint.USEast2);
			return client;
		}

		public async Task<CreateTableResponse> CreateTable(CreateTableRequest request) {
			var client = GetClient();
			var response = await client.CreateTableAsync(request);
			
			return response;
		}

		public async Task<CreateTableResponse> CreateTableProducto() {
			var tableResponse = await CreateTable(new CreateTableRequest {
				TableName = "Productos",
				ProvisionedThroughput = new ProvisionedThroughput {
					ReadCapacityUnits = 3,
					WriteCapacityUnits = 1,
				},
				KeySchema = new List<KeySchemaElement> {
					new KeySchemaElement {
						AttributeName = "ProductoId",
						KeyType = KeyType.HASH,
					},
				},
				AttributeDefinitions = new List<AttributeDefinition> {
					new AttributeDefinition {
						AttributeName = "ProductoId",
						AttributeType = ScalarAttributeType.S,
					}
					
				}
			});

			

			return tableResponse;
		}

		public async Task<CreateTableResponse> CreateTableVenta() {
			var tableResponse = await CreateTable(new CreateTableRequest {
				TableName = "Ventas",
				ProvisionedThroughput = new ProvisionedThroughput {
					ReadCapacityUnits = 3,
					WriteCapacityUnits = 1,
				},
				KeySchema = new List<KeySchemaElement> {
					new KeySchemaElement {
						AttributeName = "VentaId",
						KeyType = KeyType.HASH,
					},
				},
				AttributeDefinitions = new List<AttributeDefinition> {
					new AttributeDefinition {
						AttributeName = "VroductoId",
						AttributeType = ScalarAttributeType.S,
					}
				}
			});

			return tableResponse;
		}

		public async Task<CreateTableResponse> CreateTableVentaDetalle() {
			var tableResponse = await CreateTable(new CreateTableRequest {
				TableName = "VentaDetalles",
				ProvisionedThroughput = new ProvisionedThroughput {
					ReadCapacityUnits = 3,
					WriteCapacityUnits = 1,
				},
				KeySchema = new List<KeySchemaElement> {
					new KeySchemaElement {
						AttributeName = "ProductoId",
						KeyType = KeyType.HASH,
					},
					new KeySchemaElement {
						AttributeName = "VentaId",
						KeyType = KeyType.HASH,
					},
				},
				AttributeDefinitions = new List<AttributeDefinition> {
					new AttributeDefinition {
						AttributeName = "ProductoId",
						AttributeType = ScalarAttributeType.S,
					},
					new AttributeDefinition {
						AttributeName = "VentaId",
						AttributeType = ScalarAttributeType.S,
					}
				}
			});

			return tableResponse;
		}

		public async Task<bool> TableExist(string tableName) {
			var client = GetClient();
			var response = await client.ListTablesAsync();

			if (response.TableNames.Contains(tableName))
				return true;

			return false;
		}
	}
}
