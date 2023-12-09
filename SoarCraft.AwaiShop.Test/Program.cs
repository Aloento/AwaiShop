using Microsoft.AspNetCore.SignalR.Client;
using Microsoft.Extensions.DependencyInjection;

HubConnection connection = new HubConnectionBuilder()
    .WithUrl("https://localhost/Hub")
    .WithAutomaticReconnect()
    .AddMessagePackProtocol()
    .Build();

await connection.StartAsync();

Console.ReadLine();
