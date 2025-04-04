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
    const token = sessionStorage.getItem("token");
    const userName = sessionStorage.getItem("userName");
    const roles = JSON.parse(sessionStorage.getItem("roles"));
    const userId = sessionStorage.getItem("userId");

    if (token && userName && roles && userId) {
      setUserData({
        token,
        userName,
        roles,
        userId
      });
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
      connection.start().then(() => {
        console.log('SignalR connected');
      }).catch(err => {
        console.error('Error starting SignalR connection', err);
      });

      connection.on('ChatStarted', (newChatId) => {
        console.log('Received chatId:', newChatId); // تحقق من الـ chatId
        setChatId(newChatId);
        ensureConnection().then(() => {
          if (newChatId) {
            connection.invoke('JoinChat', newChatId)
              .then(() => {
                console.log('Joined chat successfully');
              })
              .catch(err => {
                console.error('Error joining chat', err);
              });
          }
        });
      });
      

      connection.on('ReceiveMessage', (user, message) => {
        console.log('Received message', user, message); // تحقق من تلقي الرسائل
        const fullMessage = `User ${user}: ${message}`;
        if (fullMessage !== lastMessage) {
          setMessages((prev) => [...prev, { user, message }]);
          setLastMessage(fullMessage);
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

  const ensureConnection = () => {
    if (connection?.state === signalR.HubConnectionState.Disconnected) {
      return connection.start();
    }
    return Promise.resolve();
  };

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

  const approveTicket = (ticketId) => {
    fetch(`https://waffi.runasp.net/api/tickets/approve/${ticketId}`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${userData?.token}` }
    })
      .then(res => res.json())
      .then(data => {
        alert(data.message);
        setChatId(data.chatId);
        connection.invoke('JoinChat', data.chatId);
        loadTickets();
      });
  };

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

  const sendMessage = () => {
    const message = messageInputRef.current.value;
    connection.invoke('SendMessage', userData?.userName, message);
    messageInputRef.current.value = '';
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
