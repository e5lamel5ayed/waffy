/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import * as signalR from '@microsoft/signalr';

const RealTimeChatApp = () => {
  const [token, setToken] = useState(null);
  const [connection, setConnection] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [chatId, setChatId] = useState(null);
  const [lastMessage, setLastMessage] = useState(null);
  const [messages, setMessages] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [addUserRequests, setAddUserRequests] = useState([]);

  const ticketDetailsRef = useRef();
  const messageInputRef = useRef();
  const userNameToAddRef = useRef();
  const adminUserNameToAddRef = useRef();
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const sessionToken = sessionStorage.getItem("token");
    const userName = sessionStorage.getItem("userName");
    const roles = JSON.parse(sessionStorage.getItem("roles") || '[]');
    const userId = sessionStorage.getItem("userId");

    if (sessionToken && userName && roles && userId) {
      setUserData({
        token: sessionToken,
        userName,
        roles,
        userId
      });

      const newConnection = new signalR.HubConnectionBuilder()
        .withUrl('https://waffi.runasp.net/chatHub', {
          accessTokenFactory: () => sessionToken
        })
        .withAutomaticReconnect()
        .build();

      setConnection(newConnection);
    }
  }, []);

  useEffect(() => {
    const newConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://waffi.runasp.net/chatHub', { accessTokenFactory: () => token })
      .withAutomaticReconnect()
      .build();
    setConnection(newConnection);
  }, [token]);

  useEffect(() => {
    if (connection) {
      const connection = new signalR.HubConnectionBuilder()
        .withUrl("https://waffi.runasp.net/chatHub", { accessTokenFactory: () => token })
        .withAutomaticReconnect()
        .build();


      connection.on("ChatStarted", (newChatId) => {
        const chatId = newChatId;
        ensureConnection().then(() => {
          connection.invoke("JoinChat", chatId)
            .then(() => console.log(`Joined chat ${chatId}`))
            .catch(err => console.error("JoinChat Error: ", err));
        });

      });

      connection.on("ReceiveMessage", (user, message) => {
        const fullMessage = `User ${user}: ${message}`;
        if (fullMessage !== lastMessage) {
          const messagesDiv = document.getElementById("messages");
          messagesDiv.innerHTML += `<p><strong>User ${user}:</strong> ${message}</p>`;
          const lastMessage = fullMessage;
        }
      });

      connection.on('NewAddUserRequest', () => {
        if (userData?.roles?.includes('Admin')) {
          loadAddUserRequests();
        }
      });

      ensureConnection();
    }
  }, [connection, userData]);

  function ensureConnection() {
    if (connection.state === signalR.HubConnectionState.Disconnected) {
      return connection.start()
        .then(() => console.log("Connected to SignalR"))
        .catch(err => console.error("SignalR Start Error: ", err));
    }
    return Promise.resolve();
  }

  const submitTicket = () => {
    const details = ticketDetailsRef.current.value;
    fetch('https://waffi.runasp.net/api/tickets/request', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData?.token}`
      },
      body: JSON.stringify({ details })
    })
      .then(res => res.json())
      .then(data => alert(data.message));
  };

  const loadTickets = () => {
    fetch('https://waffi.runasp.net/api/tickets/GetAllTickets', {
      headers: { Authorization: `Bearer ${userData?.token}` }
    })
      .then(res => res.json())
      .then(setTickets);
  };

  function approveTicket(ticketId) {
    fetch(`https://waffi.runasp.net/api/tickets/approve/${ticketId}`, {
      method: "POST",
      headers: { "Authorization": `Bearer ${token}` }
    })
      .then(response => response.json())
      .then(data => {
        alert(data.message);
        loadTickets();
        
        if (userData?.roles?.includes('Admin')) {
          const chatId = data.chatId;
          if (!chatId) {
            console.error("Invalid chatId received:", chatId);
            return;
          }
          ensureConnection().then(() => {
            if (connection.state === "Connected") {
              connection.invoke("JoinChat", chatId)
                .then(() => console.log(`Admin joined chat ${chatId}`))
                .catch(err => console.error("Admin JoinChat Error: ", err));
            } else {
              console.error("SignalR connection not established.");
            }
          });
        }
      })
      .catch(err => {
        console.error("Approve Error: ", err);
      });
    
  }

  function sendMessage() {
    ensureConnection().then(() => {
      const message = document.getElementById("messageInput").value;
      connection.invoke("SendMessage", chatId, message)
        .then(() => document.getElementById("messageInput").value = "")
        .catch(err => console.error("Send Message Error: ", err));
    });
  }

  const requestAddUser = () => {
    const inputRef = userData?.roles?.includes('Admin') ? adminUserNameToAddRef : userNameToAddRef;
    const userName = inputRef.current.value.trim();
    if (!userName) return alert('Enter username');

    fetch(`https://waffi.runasp.net/api/tickets/find-user-by-userName/${encodeURIComponent(userName)}`, {
      headers: { Authorization: `Bearer ${userData?.token}` }
    })
      .then(res => res.json())
      .then(user => {
        const userIdToAdd = user.id;
        const endpoint = userData?.roles?.includes('Admin')
          ? 'add-user-to-chat'
          : 'request-add-user';

        return fetch(`https://waffi.runasp.net/api/tickets/${endpoint}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${userData?.token}`
          },
          body: JSON.stringify({ userIdToAdd, chatId })
        });
      })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        inputRef.current.value = '';
      });
  };

  const loadAddUserRequests = () => {
    fetch('https://waffi.runasp.net/api/tickets/get-add-user-requests', {
      headers: { Authorization: `Bearer ${userData?.token}` }
    })
      .then(res => res.json())
      .then(setAddUserRequests);
  };

  const approveAddUserRequest = (requestId) => {
    fetch(`https://waffi.runasp.net/api/tickets/approve-add-user/${requestId}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${userData?.token}` }
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        loadAddUserRequests();
      });
  };

  return (
    <div>
      <h1>Real-Time Chat Demo</h1>
      {userData?.roles?.includes('Admin') && (
        <div>
          <h2>Admin Panel</h2>
          <button onClick={loadTickets}>Load Tickets</button>
          <ul>
            {tickets.map(ticket => (
              <li key={ticket.id}>
                {ticket.details} (User: {ticket.username})
                <button onClick={() => approveTicket(ticket.id)}>Approve</button>
              </li>
            ))}
          </ul>
          <input ref={adminUserNameToAddRef} placeholder="Enter username to add" />
          <button onClick={requestAddUser}>Add User</button>
        </div>
      )}

      {userData?.roles?.includes('User') && (
        <div>
          <input ref={ticketDetailsRef} placeholder="Ticket Details" />
          <button onClick={submitTicket}>Submit Ticket</button>
        </div>
      )}

      {chatId && (
        <div>
          <h3>Chat</h3>

          <div>
            {messages.map((m, i) => (
              <p key={i}><strong>User {m.user}:</strong> {m.message}</p>
            ))}
          </div>
          <input ref={messageInputRef} placeholder="Type a message" />
          <button onClick={sendMessage}>Send</button>

          {userData?.roles?.includes('User') && (
            <div>
              <input ref={userNameToAddRef} placeholder="Enter username to add" />
              <button onClick={requestAddUser}>Request to Add User</button>
            </div>
          )}
        </div>
      )}

      {userData?.roles?.includes('Admin') && (
        <div>
          <h3>Pending User Requests</h3>
          <ul>
            {addUserRequests.map(req => (
              <li key={req.id}>
                User {req.requestingUserId} wants to add User {req.userIdToAdd} to Chat {req.chatId}
                <button onClick={() => approveAddUserRequest(req.id)}>Approve</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default RealTimeChatApp;
