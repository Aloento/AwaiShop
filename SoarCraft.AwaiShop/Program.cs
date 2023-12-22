using MessagePack;
using MessagePack.Resolvers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Web;
using Microsoft.IdentityModel.Logging;
using SoarCraft.AwaiShop;
using SoarCraft.AwaiShop.AdminHub;
using SoarCraft.AwaiShop.Hub;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(x => x.AddServerHeader = false);

builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddMicrosoftIdentityWebApi(x => {
        x.Audience = "0ac3ee82-159d-407c-8539-7a9e1e3a1989";
        x.Events = new() {
            OnMessageReceived = c => {
                string? token = c.Request.Query["access_token"];
                if (!string.IsNullOrWhiteSpace(token)) c.Token = token;
                return Task.CompletedTask;
            }
        };
    }, x => {
        if (Shared.Dev) {
            x.RequireHttpsMetadata = false;
            IdentityModelEventSource.ShowPII = true;
            IdentityModelEventSource.LogCompleteSecurityArtifact = true;
        }

        x.Authority = "https://SoarCraft.b2clogin.com/SoarCraft.onmicrosoft.com/B2C_1_RegLog";
        x.ClientId = "0ac3ee82-159d-407c-8539-7a9e1e3a1989";
        x.TenantId = "9ed42989-9bdb-439d-80e7-c709641d1f08";
        x.AllowWebApiToBeAuthorizedByACL = true;
    });

builder.Services.AddDbContext<ShopContext>(x => {
    x.UseLazyLoadingProxies();

    if (Shared.Dev) {
        x.EnableSensitiveDataLogging();
        x.EnableDetailedErrors();
        x.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection"), opt => opt.EnableRetryOnFailure());
    } else
        x.UseSqlServer(Environment.GetEnvironmentVariable("SQLAZURECONNSTR_Zero"), opt => opt.EnableRetryOnFailure());
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

#if false
    await app.SeedData();
#endif
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
