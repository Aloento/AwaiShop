using MessagePack;
using MessagePack.Resolvers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using SoarCraft.AwaiShop;
using SoarCraft.AwaiShop.AdminHub;
using SoarCraft.AwaiShop.Hub;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(x => x.AddServerHeader = false);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(JwtBearerDefaults.AuthenticationScheme, x => {
        x.Authority = "https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog/v2.0";
        x.Audience = "0ac3ee82-159d-407c-8539-7a9e1e3a1989";
        x.RequireHttpsMetadata = !Shared.Dev;
        x.Events = new() {
            OnMessageReceived = c => {
                string? token = c.Request.Query["access_token"];
                if (!string.IsNullOrWhiteSpace(token)) c.Token = token;
                return Task.CompletedTask;
            }
        };
    });

builder.Services.AddDbContext<ShopContext>(x => {
    if (Shared.Dev) {
        x.EnableSensitiveDataLogging();
        x.EnableDetailedErrors();
        x.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"));
    } else
        x.UseSqlServer(Environment.GetEnvironmentVariable("SQLAZURECONNSTR_Zero"));
});

if (Shared.Dev)
    builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddSignalR(x => {
    x.HandshakeTimeout = TimeSpan.FromSeconds(5);
    x.SupportedProtocols = new[] { "messagepack" };
    x.EnableDetailedErrors = Shared.Dev;
    x.MaximumParallelInvocationsPerClient = sbyte.MaxValue / 2;
}).AddMessagePackProtocol(x => {
    x.SerializerOptions = MessagePackSerializerOptions.Standard
        .WithSecurity(MessagePackSecurity.UntrustedData)
        .WithResolver(ContractlessStandardResolverAllowPrivate.Instance);
});

builder.Host.UseSystemd();

var app = builder.Build();

if (Shared.Dev) {
    app.UseDeveloperExceptionPage();
    app.UseMigrationsEndPoint();
}

app.UseHttpsRedirection();

app.UseHsts();

app.UseRouting();

app.UseAuthentication();

app.UseAuthorization();

app.UseWebSockets();

app.MapHub<ShopHub>("/Hub");

app.MapHub<AdminHub>("/AdminHub");

app.MapFallbackToFile("index.html");

app.Run();
