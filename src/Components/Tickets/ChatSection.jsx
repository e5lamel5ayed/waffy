import React, { useEffect, useRef, useState } from "react";
import { Card } from "primereact/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText as PrimeInputText } from "primereact/inputtext";
import "./ChatSection.css";

export default function ChatSection({
  chatId,
  messages,
  message,
  setMessage,
  sendMessage,
  backToTickets,
  requestAddUser,
  userRole,
  userToAdd,
  setUserToAdd,
}) {
  const [showAddUserDialog, setShowAddUserDialog] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  }, [messages]);

  if (!chatId) return null;

  const openAddUserDialog = () => setShowAddUserDialog(true);
  const closeAddUserDialog = () => setShowAddUserDialog(false);

  return (
    <Card title="Live Chat" className="chat-card">
      <div className="d-flex justify-content-end mb-3">
        <Button label="رجوع إلى التذاكر" icon="pi pi-arrow-left" className="p-button-secondary rounded-1" onClick={backToTickets} />
      </div>

      <div className="chat-messages">
        {messages.map((msg, index) => {
          const isCurrentUser = msg.role === userRole;

          return (
            <div key={index} className={`chat-message ${isCurrentUser ? "Admin" : "User"}`}>
              <div className="message-bubble">
                <strong>{msg.sender} ({msg.role})</strong>
                <p>{msg.body}</p>
              </div>
            </div>
          );
        })}
        <div ref={messagesEndRef}></div>
      </div>

      <div className="chat-input">
        <InputText
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type a message..."
          className="chat-text-input"
        />
        <Button label="ارسال" onClick={sendMessage} className="chat-send-button rounded-1" />
      </div>

      <div className="d-flex justify-content-start mt-3">
        <Button label="إضافة مستخدم" icon="pi pi-user-plus" className="p-button-success rounded-1" onClick={openAddUserDialog} />
      </div>

      <Dialog
        visible={showAddUserDialog}
        style={{ width: '450px' }}
        header="إضافة مستخدم إلى الشات"
        modal
        onHide={closeAddUserDialog}
      >
        <div>
          <PrimeInputText
            value={userToAdd}
            onChange={(e) => setUserToAdd(e.target.value)}
            placeholder="أدخل اسم المستخدم"
            className="p-inputtext p-component w-100"
          />
          <div className="mt-3 d-flex justify-content-end">
            <Button label="إضافة" icon="pi pi-check" className="p-button-primary rounded-1" onClick={requestAddUser} />
            <Button label="إغلاق" icon="pi pi-times" className="p-button-text rounded-1" onClick={closeAddUserDialog} />
          </div>
        </div>
      </Dialog>
    </Card>
  );
}
