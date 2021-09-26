FROM mcr.microsoft.com/dotnet/sdk:3.1 AS builder

WORKDIR /app

COPY ./ ./

WORKDIR /app/AppVenta.Infraestructura.API/

RUN dotnet restore

RUN dotnet publish -c release -o ./../build

FROM mcr.microsoft.com/dotnet/aspnet:3.1

WORKDIR /app

COPY --from=builder /app/build/ ./

EXPOSE 80

ENTRYPOINT ["dotnet", "AppVenta.Infraestructura.API.dll"]