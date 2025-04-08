import React, { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";

export default function Ticket() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [chatId, setChatId] = useState(null);
  const [details, setDetails] = useState("");
  const [tickets, setTickets] = useState([]);
  const [userToAdd, setUserToAdd] = useState("");
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState("");
  const connectionRef = useRef(null);
  const [addUserRequests, setAddUserRequests] = useState([]);

  useEffect(() => {
    const savedToken = sessionStorage.getItem("token");
    const userId = sessionStorage.getItem("userId");
    const userName = sessionStorage.getItem("userName");
    const roles = JSON.parse(sessionStorage.getItem("roles") || "[]");

    if (savedToken && userId && userName && roles.length > 0) {
      setToken(savedToken);
      setCurrentUser({
        id: userId,
        username: userName,
        role: roles[0],
      });
    }
  }, []);

  const submitTicket = () => {
    fetch("https://waffi.runasp.net/api/tickets/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ details }),
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        setChatId(data.chatId);
      });
  };

  const loadTickets = () => {
    fetch("https://waffi.runasp.net/api/tickets/GetAllTickets", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setTickets);
  };

  const approveTicket = async (ticketId) => {
    try {
      const response = await fetch(
        `https://waffi.runasp.net/api/tickets/approve/${ticketId}`,
        {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to approve ticket");

      alert(data.message);
      setChatId(data.chatId);
      loadTickets();
    } catch (err) {
      alert("Approve failed: " + err.message);
    }
  };

  const requestAddUser = async () => {
    if (!userToAdd) {
      alert("Please enter a username to add");
      return;
    }

    try {
      const userResponse = await fetch(
        `https://waffi.runasp.net/api/tickets/find-user-by-userName/${encodeURIComponent(userToAdd)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const userData = await userResponse.json();
      if (!userResponse.ok) throw new Error(userData.message || "User not found");

      const endpoint =
        currentUser.role === "Admin"
          ? "add-user-to-chat"
          : "request-add-user";
      const response = await fetch(`https://waffi.runasp.net/api/tickets/${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userIdToAdd: userData.id, chatId }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Failed to add/request user");

      alert(data.message);
      setUserToAdd("");
    } catch (err) {
      alert("Add user failed: " + err.message);
    }
  };
  const loadAddUserRequests = () => {
    fetch(`https://waffi.runasp.net/api/tickets/get-add-user-requests`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then(setAddUserRequests)
      .catch((err) =>
        console.error("Load Add User Requests Error: ", err)
      );
  };

  const approveAddUserRequest = (requestId) => {
    fetch(`https://waffi.runasp.net/api/Tickets/approve-add-user/${requestId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        loadAddUserRequests(); // reload after approval
      })
      .catch((err) =>
        console.error("Approve Add User Request Error: ", err)
      );
  };
  useEffect(() => {
    if (!token || !currentUser) return;

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://waffi.runasp.net/chatHub", {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();

    connectionRef.current = connection;

    connection.on("ChatStarted", (newChatId) => {
      console.log("ChatStarted Notify received: ", newChatId);
      setChatId(newChatId);
      connection.invoke("JoinChat", newChatId)
        .catch((err) => console.error("JoinChat Error: ", err));
    });

    connection.on("ReceiveMessage", (sender, messageBody) => {
      setMessages((prev) => [...prev, `${sender}: ${messageBody}`]);
    });

    connection.on("NewAddUserRequest", (requestId) => {
      if (currentUser.role === "Admin") {
        console.log("NewAddUserRequest received: ", requestId);
      }
    });

    connection.start()
      .then(() => {
        connection.invoke("JoinChat", `user_${currentUser.id}`)
          .catch((err) => console.error("Initial JoinChat Error: ", err));

        if (currentUser.role === "Admin") {
          connection.invoke("JoinAdminGroup")
            .catch((err) => console.error("JoinAdminGroup Error: ", err));
        }
      })
      .catch((err) => console.error("SignalR Connection Error: ", err));

    return () => {
      connection.stop();
    };
  }, [token, currentUser]);

  const sendMessage = () => {
    if (connectionRef.current && message) {
      connectionRef.current
        .invoke("SendMessage", chatId, message)
        .then(() => setMessage(""))
        .catch(console.error);
    }
  };

  if (!token || !currentUser) {
    return <div>جاري التحقق من معلومات الدخول...</div>;
  }

  return (
    <div className="container">
      <h1>Real-Time Chat Demo</h1>
      {currentUser?.role === "Admin" ? (
        <div>
          <h2>Admin Panel</h2>
          <button onClick={loadTickets}>Load Tickets</button>
          <ul>
            {tickets.map((ticket) => (
              <li key={ticket.id}>
                {ticket.details} (User: {ticket.username}){" "}
                <button onClick={() => approveTicket(ticket.id)}>Approve</button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <input
            placeholder="Ticket Details"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
          <button onClick={submitTicket}>Submit Ticket</button>
        </div>
      )}
      {currentUser?.role === "Admin" && (
        <div style={{ marginTop: "2rem" }}>
          <h3>Add User Requests</h3>
          <button onClick={loadAddUserRequests}>Load Add User Requests</button>
          <ul>
            {addUserRequests.map((req) => (
              <li key={req.id}>
                User {req.requestingUserId} wants to add User {req.userIdToAdd} to Chat {req.chatId}{" "}
                <button onClick={() => approveAddUserRequest(req.id)}>Approve</button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div id="chatSection" style={{ display: chatId ? "block" : "none" }}>
        <h3>Chat</h3>
        <div style={{ border: "1px solid #ccc", padding: "10px", height: "200px", overflowY: "auto" }}>
          {messages.map((m, i) => (
            <p key={i}>{m}</p>
          ))}
        </div>
        <input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message"
        />
        <button onClick={sendMessage}>Send</button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <h4>إضافة مستخدم للمحادثة</h4>
        <input
          type="text"
          placeholder="اسم المستخدم المراد إضافته"
          value={userToAdd}
          onChange={(e) => setUserToAdd(e.target.value)}
          style={{ marginRight: "10px" }}
        />
        <button onClick={requestAddUser}>إضافة</button>
      </div>
      {/* </div> */}
    </div >
  );
}
