using ChatAppBackend.Controllers; // Ensure this points to the correct namespace

var builder = WebApplication.CreateBuilder(args);

// Register SignalR services
builder.Services.AddSignalR();

// Configure CORS to allow requests from your React frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend",
        policy =>
        {
            policy.WithOrigins("http://localhost:3000") // Replace with your frontend URL and port if different
                  .AllowAnyHeader()
                  .AllowAnyMethod()
                  .AllowCredentials(); // Necessary for SignalR with WebSockets
        });
});

var app = builder.Build();

// Enable CORS for the specified policy
app.UseCors("AllowFrontend");

// Map the SignalR Hub endpoint
app.MapHub<ChatController>("/chathub"); // Ensure this maps to your SignalR Hub class

app.Run();
