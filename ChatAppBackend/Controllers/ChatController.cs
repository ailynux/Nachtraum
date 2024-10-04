using Microsoft.AspNetCore.SignalR;
using System;
using System.Threading.Tasks;

namespace ChatAppBackend.Controllers
{
    public class ChatController : Hub
    {
        // Static variable to keep track of user count
        private static int userCount = 0;

        // This method should receive messages from the client and broadcast them to all clients
        public async Task SendMessage(string user, string message)
        {
            // Logging for debugging to make sure backend receives the message
            Console.WriteLine($"Received message from {user}: {message}");

            // Broadcast message to all connected clients
            await Clients.All.SendAsync("ReceiveMessage", user, message);
        }

        // Override OnConnectedAsync to increment user count when a user connects
       public override Task OnConnectedAsync()
            {
                userCount++;
                Console.WriteLine($"User connected. Current user count: {userCount}");

                // Broadcast updated user count to all connected clients
                Clients.All.SendAsync("UpdateUserCount", userCount);

                return base.OnConnectedAsync();
            }

            public override Task OnDisconnectedAsync(Exception? exception)
            {
                userCount--;
                Console.WriteLine($"User disconnected. Current user count: {userCount}");

                // Broadcast updated user count to all connected clients
                Clients.All.SendAsync("UpdateUserCount", userCount);

                return base.OnDisconnectedAsync(exception);
            }

    }
}
