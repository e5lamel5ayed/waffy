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
import "./ChatSection.css";

export default function Ticket() {
  const [token, setToken] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [chatId, setChatId] = useState(null);
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
  const [formData, setFormData] = useState({
    ticketName: "",
    productOrServiceName: "",
    productOrServiceDescription: "",
    price: "",
    feeResponsibility: "",
    otherPartyUsername: "",
    createdAt: new Date().toISOString()
  });

  const [requestDialogVisible, setRequestDialogVisible] = useState(false);
  useEffect(() => {
    const savedToken = localStorage.getItem("waffi_token");
    const userId = localStorage.getItem("waffi_userId");
    const userName = localStorage.getItem("waffi_userName");
    const phoneNumber = localStorage.getItem("waffi_phoneNumber");
    const email = localStorage.getItem("waffi_email");
    const roles = JSON.parse(localStorage.getItem("waffi_roles") || "[]");

    const isValidPhone = phoneNumber && phoneNumber !== "undefined" && phoneNumber !== "null";

    if (savedToken && userName && roles.length > 0) {
      setToken(savedToken);
      setCurrentUser({
        id: userId,
        username: userName,
        phoneNumber: isValidPhone ? phoneNumber : email,
        email: email,
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
      const formattedMessages = data.map(msg => ({
        sender: msg.userName,
        body: msg.body,
        role: msg.role,
      }));
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
    const now = new Date();
    const localISO = new Date(now.getTime() - now.getTimezoneOffset() * 60000).toISOString();

    const dataToSend = {
      ...formData,
      createdAt: localISO,
    };


    fetch("https://waffi.runasp.net/api/tickets/request", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(dataToSend),
    })
      .then((res) => res.json())
      .then((data) => {
        showToast(data.message, 'success');
        setChatId(data.chatId);
        setVisible(false); // يقفل الدايلوج

        // تفضية الحقول
        setFormData({
          ticketName: "",
          productOrServiceName: "",
          productOrServiceDescription: "",
          price: "",
          feeResponsibility: null,
          otherPartyUsername: ""
        });

        loadTickets();
        loadUserTickets();
        setTickets([]);
      })

      .catch((error) => {
        showToast(error, 'danger');
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
      loadUserTickets();
      showToast(data.message, 'success');
      setChatId(data.chatId);
      loadOldMessages(data.chatId);
      loadTickets();
    } catch (err) {
      showToast(err, 'danger');
    }
  };
  const deleteTicket = async (ticketId) => {
    try {
      const response = await fetch(
        `https://waffi.runasp.net/api/Tickets/DeleteTicket/${ticketId}`,
        {
          method: "DELETE",
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "فشل في حذف التذكرة");

      showToast(data.message, 'success');
      loadTickets();
    } catch (err) {
      showToast("حدث خطأ أثناء حذف التذكرة", err.message);
    }
  };

  const requestAddUser = async () => {
    if (!userToAdd) {
      showToast("الرجاء إدخال اسم المستخدم لإضافته", 'warn');
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

      showToast(data.message, 'success');
      setUserToAdd("");
    } catch (err) {
      showToast("فشل في إضافة المستخدم", err, 'danger');
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
        showToast(data.message, 'success');
        loadAddUserRequests();
      })
      .catch((err) => {
        console.error("Approve Add User Request Error: ", err);
        showToast("حدث خطأ أثناء الموافقة على الطلب", 'error'); // اختياري: توست للخطأ
      });
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
      loadOldMessages(newChatId);
      connection.invoke("JoinChat", newChatId).catch(console.error);

      loadUserTickets();
    });


    connection.on("ReceiveMessage", (sender, messageBody, role) => {
      setMessages((prev) => [
        ...prev,
        { sender, body: messageBody, role }
      ]);
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
    const trimmedMessage = message.trim();
    if (connectionRef.current && trimmedMessage) {
      connectionRef.current
        .invoke("SendMessage", chatId, trimmedMessage)
        .then(() => {
          // ما تضيفش الرسالة يدويًا هنا
          setMessage(""); // فقط فضي التكست
        })
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
              <div className="d-flex align-items-center ">
                <div>
                  <img src="/assets/client5.png" alt="User" className="rounded-circle m-auto" style={{ width: '70px', height: '70px' }} />
                </div>
              </div>
              <div>
                <div className="fw-bold mb-3">مرحبا {currentUser.username}</div>
                <div className="text-muted">
                  {currentUser.phoneNumber === currentUser.email
                    ? currentUser.email
                    : currentUser.phoneNumber}
                </div>

              </div>
            </Card>

            <div>
              {/* زر حسب الدور */}
              <div className="mb-3">
                {currentUser.role === "Admin" ? (
                  <div className="d-flex gap-3">
                    <Button
                      label="بدء معاملة جديدة"
                      icon="pi pi-plus"
                      className="p-button-primary w-100 rounded-1"
                      onClick={() => setVisible(true)}
                    />
                    <Button
                      label="الطلبات"
                      icon="pi pi-list"
                      className="p-button-primary w-100 rounded-1"
                      onClick={() => setRequestDialogVisible(true)}
                    />
                  </div>
                ) : (
                  <Button
                    label="بدء معاملة جديدة"
                    icon="pi pi-plus"
                    className="p-button-primary w-100 rounded-1"
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

              {/* الفوتر */}
              <div className="text-center text-muted small mt-3">
                <a href="#">سياسة الخصوصية</a> | <a href="#">شروط الاستخدام</a>
                <br />
                جميع الحقوق محفوظة © وفّق 2022
              </div>
            </Card>

          </div>

          <div className="col-md-9 ticket-mop">
            <div className="container" style={{ maxHeight: 'calc(100vh - 100px)', overflowY: 'auto' }}>
              {currentUser.role === "Admin" && !inChatMode && (
                <AdminPanel
                  tickets={tickets}
                  approveTicket={approveTicket}
                  deleteTicket={deleteTicket}
                  openChat={openChat}
                />
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
                  userRole={currentUser.role}
                  setUserToAdd={setUserToAdd}
                  requestAddUser={requestAddUser}
                  currentUser={currentUser}
                />
              )}
            </div>
          </div>
        </div>

        <Dialog header="معاملة جديدة" visible={visible} onHide={() => setVisible(false)} style={{ width: '30vw' }} breakpoints={{ '960px': '75vw' }}>
          <SubmitTicketForm
            formData={formData}
            setFormData={setFormData}
            submitTicket={submitTicket}
          />
        </Dialog>


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
