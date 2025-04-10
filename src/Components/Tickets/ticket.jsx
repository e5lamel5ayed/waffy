/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import * as signalR from "@microsoft/signalr";
import SubmitTicketForm from "./SubmitTicketForm";
import AdminPanel from "./AdminPanel";
import AddUserRequestsPanel from "./AddUserRequestsPanel";
import ChatSection from "./ChatSection";
import Nav from "../Nav";
import { Dialog } from 'primereact/dialog';
import { Card } from 'primereact/card';
import { Button } from "primereact/button";
import UserTicketsPanel from "./UserTicketsPanel";
import { Toast } from 'primereact/toast';

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
  const [visible, setVisible] = useState(false);
  const [inChatMode, setInChatMode] = useState(false);
  const [userTickets, setUserTickets] = useState([]);
  const toast = useRef(null);

  const [requestDialogVisible, setRequestDialogVisible] = useState(false);
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
  const showToast = (message, severity) => {
    toast.current.show({ severity: severity, summary: message, life: 5000 });
  };


  const loadOldMessages = async (chatId) => {
    try {
      const res = await fetch(`https://waffi.runasp.net/api/Tickets/messages/${chatId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load old messages");

      const formattedMessages = data.map(msg => `${msg.userName}: ${msg.body}`);
      setMessages(formattedMessages);
    } catch (err) {
      console.error("Error loading old messages:", err);
    }
  };
  useEffect(() => {
    if (chatId) {
      loadOldMessages(chatId);
    }
  }, [chatId]);

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
        showToast(data.message, 'success');
        setChatId(data.chatId);
      })
      .catch((error) => {
        showToast(error);
      });
  };

  const loadTickets = () => {
    fetch("https://waffi.runasp.net/api/tickets/GetAllTickets", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then(setTickets);
  };
  const loadUserTickets = async () => {
    try {
      const res = await fetch(
        `https://waffi.runasp.net/api/Tickets/GetUserTickets/${currentUser.id}`,
        {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await res.json();
      setUserTickets(data);
    } catch (error) {
      console.error("Error loading user tickets", error);
    }
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

      showToast(data.message, 'success'); // استخدام Toast هنا
      setChatId(data.chatId);
      loadOldMessages(data.chatId);
      loadTickets();
    } catch (err) {
      showToast("حدث خطأ في الموافقة على التذكرة", err);
    }
  };

  const requestAddUser = async () => {
    if (!userToAdd) {
      showToast("الرجاء إدخال اسم المستخدم لإضافته", 'warn'); // استخدام Toast هنا
      return;
    }

    try {
      const userResponse = await fetch(
        `https://waffi.runasp.net/api/tickets/find-user-by-userName/${encodeURIComponent(userToAdd)}`,
        { headers: { Authorization: `Bearer ${token}` } }
      );
      const userData = await userResponse.json();
      if (!userResponse.ok) throw new Error(userData.message || "User not found");

      const endpoint = currentUser.role === "Admin" ? "add-user-to-chat" : "request-add-user";
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

      showToast(data.message, 'success'); // استخدام Toast هنا
      setUserToAdd("");
    } catch (err) {
      showToast("فشل في إضافة المستخدم", err);
    }
  };

  const loadAddUserRequests = () => {
    fetch(`https://waffi.runasp.net/api/tickets/get-add-user-requests`, {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((response) => response.json())
      .then(setAddUserRequests)
      .catch((err) => console.error("Load Add User Requests Error: ", err));
  };

  const approveAddUserRequest = (requestId) => {
    fetch(`https://waffi.runasp.net/api/Tickets/approve-add-user/${requestId}`, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        alert(data.message);
        loadAddUserRequests();
      })
      .catch((err) => console.error("Approve Add User Request Error: ", err));
  };

  useEffect(() => {
    if (!token || !currentUser) return;

    if (token && currentUser.role === "Admin") {
      loadTickets();
      loadAddUserRequests();
    } else if (token && currentUser.role === "User") {
      loadUserTickets();
    }

    const connection = new signalR.HubConnectionBuilder()
      .withUrl("https://waffi.runasp.net/chatHub", {
        accessTokenFactory: () => token,
      })
      .withAutomaticReconnect()
      .build();

    connectionRef.current = connection;

    connection.on("ChatStarted", (newChatId) => {
      setChatId(newChatId);
      loadOldMessages(newChatId); // تحميل الرسائل القديمة
      connection.invoke("JoinChat", newChatId).catch(console.error);
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
        connection.invoke("JoinChat", `user_${currentUser.id}`).catch(console.error);
        if (currentUser.role === "Admin") {
          connection.invoke("JoinAdminGroup").catch(console.error);
        }
      })
      .catch(console.error);

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

  const openChat = (chatId) => {
    setChatId(chatId);
    setInChatMode(true);
    connectionRef.current?.invoke("JoinChat", chatId).catch(console.error);
  };

  const backToTickets = () => {
    setChatId(null);
    setInChatMode(false);
  };

  if (!token || !currentUser) return <div>جاري التحقق من معلومات الدخول...</div>;

  return (
    <>
      <Nav />
      <Toast ref={toast} />
      <div dir="rtl" style={{ backgroundColor: '#f0fbff', minHeight: '100vh', padding: '2rem' }}>
        <div className="row">
          <div className="col-md-3">
            {/* بطاقة المستخدم */}
            <Card className="mb-3 shadow-sm p-3 bg-white">
              <div className="d-flex align-items-center gap-4">
                <div>
                  <img src="/assets/client5.png" alt="User" className="rounded-circle me-3" style={{ width: '70px', height: '70px' }} />
                </div>
                <div>
                  <div className="fw-bold mb-3">مرحبا {currentUser.username}</div>
                  <div className="text-muted">+966555447496</div>
                </div>
              </div>
            </Card>

            <div>
              {/* زر حسب الدور */}
              <div className="mb-3">
                {currentUser.role === "Admin" ? (
                  <Button
                    label="الطلبات"
                    icon="pi pi-list"
                    className="p-button-primary w-100"
                    onClick={() => setRequestDialogVisible(true)}
                  />
                ) : (
                  <Button
                    label="بدء معاملة جديدة"
                    icon="pi pi-plus"
                    className="p-button-primary w-100"
                    onClick={() => setVisible(true)}
                  />
                )}
              </div>
            </div>

            {/* الفورم الأساسي */}
            <Card className="shadow-sm bg-white">
              <div className="d-flex justify-content-center gap-3 mb-4">
                <img src="/assets/client5.png" className="rounded-circle shadow" alt="User" style={{ width: '70px', height: '70px' }} />
                <img src="/assets/client5.png" className="rounded-circle shadow" alt="User" style={{ width: '70px', height: '70px' }} />
              </div>

              <div className="text-center fw-bold my-4">
                <h6>توثيق الهوية من خلال أبشر، أطرافاً موثوقين لتجنب الاحتيال</h6>
              </div>

            </Card>

            {/* الفوتر */}
            <div className="text-center text-muted small mt-3">
              <a href="#">سياسة الخصوصية</a> | <a href="#">شروط الاستخدام</a>
              <br />
              جميع الحقوق محفوظة © وفّق 2022
            </div>
          </div>

          <div className="col-md-9">
            <div className="container" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
              {currentUser.role === "Admin" && !inChatMode && (
                <>
                  <AdminPanel tickets={tickets} approveTicket={approveTicket} openChat={openChat} />
                  <AddUserRequestsPanel
                    addUserRequests={addUserRequests}
                    loadAddUserRequests={loadAddUserRequests}
                    approveAddUserRequest={approveAddUserRequest}
                  />
                </>
              )}

              {currentUser.role === "User" && !inChatMode && (
                <UserTicketsPanel tickets={userTickets} openChat={openChat} />
              )}

              {inChatMode && (
                <ChatSection
                  chatId={chatId}
                  messages={messages}
                  message={message}
                  setMessage={setMessage}
                  sendMessage={sendMessage}
                  backToTickets={backToTickets}
                  userToAdd={userToAdd}
                  setUserToAdd={setUserToAdd}
                  requestAddUser={requestAddUser}
                />
              )}
            </div>
          </div>
        </div>

        {/* Dialog */}
        <Dialog header="معاملة جديدة" visible={visible} onHide={() => setVisible(false)} style={{ width: '30vw' }} breakpoints={{ '960px': '75vw' }}>
          <div>
            <SubmitTicketForm details={details} setDetails={setDetails} submitTicket={submitTicket} />
          </div>
        </Dialog>

        {/* Dialog لعرض الطلبات - يظهر فقط للأدمن */}
        <Dialog
          header="طلبات اضافة مستخدمين"
          visible={requestDialogVisible}
          onHide={() => setRequestDialogVisible(false)}
          style={{ width: '50vw' }}
          breakpoints={{ '960px': '80vw', '640px': '100vw' }}
        >
          <AddUserRequestsPanel
            addUserRequests={addUserRequests}
            approveAddUserRequest={approveAddUserRequest}
          />
        </Dialog>
      </div>

    </>
  );
}
