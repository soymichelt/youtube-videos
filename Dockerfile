FROM mcr.microsoft.com/dotnet/sdk:3.1 AS builder
WORKDIR /app
COPY *.csproj ./
RUN dotnet restore
COPY ./ ./
RUN dotnet publish -c release -o /build

FROM mcr.microsoft.com/dotnet/runtime:3.1
WORKDIR /app
COPY --from=builder /app/build/ ./
ENTRYPOINT ["dotnet", "dotnetapp.dll"]