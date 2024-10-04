import * as signalR from "@microsoft/signalr";

// Ensure the correct backend URL for SignalR
const connection = new signalR.HubConnectionBuilder()
  .withUrl("http://localhost:5286/chathub") // .NET backend URL
  .build();

export default connection;
