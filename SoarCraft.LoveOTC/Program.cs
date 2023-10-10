using SoarCraft.LoveOTC;

var builder = WebApplication.CreateBuilder(args);

builder.WebHost.ConfigureKestrel(x => {
    x.AddServerHeader = false;
});

builder.Services.AddControllers();

var app = builder.Build();

if (Shared.Dev) {
    app.UseHttpsRedirection();
    app.UseHsts();
}

app.UseDefaultFiles();

app.UseStaticFiles();

app.MapControllers();

app.MapFallbackToFile("index.html");

app.Run();
