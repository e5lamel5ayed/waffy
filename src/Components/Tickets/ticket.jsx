import React, { useEffect, useRef, useState } from 'react';
import * as signalR from '@microsoft/signalr';

const Ticket = () => {
  const [token, setToken] = useState(null);
  const [chatId, setChatId] = useState(null);
  const [lastTicketId, setLastTicketId] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [tickets, setTickets] = useState([]);
  const [addUserRequests, setAddUserRequests] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [ticketDetails, setTicketDetails] = useState('');

  const connectionRef = useRef(null);

  useEffect(() => {
    connectionRef.current = new signalR.HubConnectionBuilder()
      .withUrl("https://waffi.runasp.net/chatHub", {
        accessTokenFactory: () => token
      })
      .withAutomaticReconnect()
      .build();

    connectionRef.current.on("ChatStarted", handleChatStarted);
    connectionRef.current.on("ReceiveMessage", handleReceiveMessage);
    connectionRef.current.on("NewAddUserRequest", handleNewAddUserRequest);
  }, [token]);

  const ensureConnection = async () => {
    if (connectionRef.current.state === signalR.HubConnectionState.Disconnected) {
      try {
        await connectionRef.current.start();
        console.log("Connected to SignalR");
      } catch (err) {
        console.error("SignalR Start Error:", err);
      }
    }
  };

  const parseJwt = (token) => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(c => {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    return JSON.parse(jsonPayload);
  };

  const login = async (phoneNumber, password) => {
    try {
      const response = await fetch("https://waffi.runasp.net/api/account/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ phoneNumber, password })
      });
      if (!response.ok) throw new Error("Login failed");
      const data = await response.json();
      const tokenValue = data.data.token;
      const tokenData = parseJwt(tokenValue);
      const user = {
        id: tokenData.nameid,
        username: tokenData.given_name,
        role: tokenData.role
      };
      localStorage.setItem("token", tokenValue);
      setToken(tokenValue);
      setCurrentUser(user);
      if (user.role === "Admin") {
        await ensureConnection();
        connectionRef.current.invoke("JoinAdminGroup");
        connectionRef.current.invoke("JoinChat", `user_${user.id}`);
        loadTickets();
      } else {
        await ensureConnection();
        connectionRef.current.invoke("JoinChat", `user_${user.id}`);
      }
    } catch (err) {
      console.error("Login Error:", err);
      alert("Login failed: " + err.message);
    }
  };

  const handleChatStarted = async (newChatId) => {
    setChatId(newChatId);
    await ensureConnection();
    connectionRef.current.invoke("JoinChat", newChatId);
    if (currentUser.role === "Admin") {
      loadUsers();
    } else {
      // Optional UI logic for user
    }
  };

  const handleReceiveMessage = (user, message) => {
    const fullMessage = `User ${user}: ${message}`;
    if (fullMessage !== lastMessage) {
      setLastMessage(fullMessage);
      console.log(fullMessage); // replace with adding to chat view
    }
  };

  const handleNewAddUserRequest = () => {
    if (currentUser.role === "Admin") {
      loadAddUserRequests();
    }
  };

  const requestAddUser = async (userNameToAdd) => {
    try {
      const response = await fetch(`https://waffi.runasp.net/api/tickets/find-user-by-userName/${encodeURIComponent(userNameToAdd)}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const user = await response.json();
      const userIdToAdd = user.id;

      const url = currentUser.role === "Admin"
        ? "https://waffi.runasp.net/api/tickets/add-user-to-chat"
        : "https://waffi.runasp.net/api/tickets/request-add-user";

      const postResponse = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ userIdToAdd, chatId })
      });
      const result = await postResponse.json();
      alert(result.message);
    } catch (err) {
      console.error("Request Add User Error:", err);
      alert(err.message);
    }
  };

  const loadAddUserRequests = async () => {
    try {
      const response = await fetch("https://waffi.runasp.net/api/tickets/get-add-user-requests", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const requests = await response.json();
      setAddUserRequests(requests);
    } catch (err) {
      console.error("Load Add User Requests Error:", err);
    }
  };

  const approveAddUserRequest = async (requestId) => {
    try {
      const response = await fetch(`https://waffi.runasp.net/api/tickets/approve-add-user/${requestId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      alert(data.message);
      loadAddUserRequests();
      loadUsers();
    } catch (err) {
      console.error("Approve Add User Error:", err);
    }
  };

  const submitTicket = async () => {
    try {
      const response = await fetch("https://waffi.runasp.net/api/tickets/request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ details: ticketDetails })
      });
      const data = await response.json();
      alert(data.message);
      setLastTicketId(data.requestId);
    } catch (err) {
      console.error("Submit Ticket Error:", err);
    }
  };

  const loadTickets = async () => {
    try {
      const response = await fetch("https://waffi.runasp.net/api/tickets/GetAllTickets", {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      setTickets(data);
    } catch (err) {
      console.error("Load Tickets Error:", err);
    }
  };

  const approveTicket = async (ticketId) => {
    try {
      const response = await fetch(`https://waffi.runasp.net/api/tickets/approve/${ticketId}`, {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await response.json();
      alert(data.message);
      loadTickets();
      if (currentUser.role === "Admin") {
        setChatId(data.chatId);
        ensureConnection().then(() => {
          connectionRef.current.invoke("JoinChat", data.chatId);
        });
      }
    } catch (err) {
      console.error("Approve Ticket Error:", err);
    }
  };

  const sendMessage = async () => {
    await ensureConnection();
    connectionRef.current.invoke("SendMessage", chatId, messageInput);
    setMessageInput('');
  };

  const loadUsers = () => {
    // You would implement user list fetching here
  };

  return (
    <div>
      <h1>Real-Time Chat Demo</h1>

      <div id="loginSection">
        <input id="phoneNumber" placeholder="Your Phone Number" type="text" />
        <input id="password" placeholder="Your Password" type="password" />
        <button onClick={() => login()}>Login</button>
      </div>

      <div id="userSection" style={{ display: "none" }}>
        <input id="ticketDetails" placeholder="Ticket Details" />
        <button onClick={() => submitTicket()}>Submit Ticket</button>
      </div>

      <div id="adminSection" style={{ display: "none" }}>
        <h2>Admin Panel</h2>
        <ul id="ticketList"></ul>
        <div id="adminAddUserSection" style={{ display: "none" }}>
          <input
            type="text"
            id="adminUserNameToAdd"
            placeholder="Enter username to add"
          />
          <button onClick={() => requestAddUser()}>Add User</button>
        </div>
      </div>

      <div id="chatSection" style={{ display: "none" }}>
        <h3>Chat</h3>
        <div id="messages"></div>
        <input id="messageInput" placeholder="Type a message" />
        <button onClick={() => sendMessage()}>Send</button>
        <input
          id="userNameToAdd"
          placeholder="Enter username to add"
          style={{ display: "none" }}
        />
        <button
          id="requestAddUserBtn"
          style={{ display: "none" }}
          onClick={() => requestAddUser()}
        >
          Request to Add User
        </button>
      </div>
    </div>
  );
};

export default Ticket;