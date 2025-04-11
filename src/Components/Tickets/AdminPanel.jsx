import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';

export default function AdminPanel({ tickets, approveTicket, deleteTicket, openChat }) {
    const [visible, setVisible] = useState(false);
    const [selectedTicketId, setSelectedTicketId] = useState(null);

    const confirmDelete = (ticketId) => {
        setSelectedTicketId(ticketId);
        setVisible(true);
    };

    const handleAccept = () => {
        deleteTicket(selectedTicketId);
        setVisible(false);
    };

    return (
        <div className="container" dir="rtl">
            <ConfirmDialog
                visible={visible}
                onHide={() => setVisible(false)}
                message="هل أنت متأكد أنك تريد حذف هذه التذكرة؟"
                header="تأكيد الحذف"
                icon="pi pi-exclamation-triangle"
                accept={handleAccept}
                reject={() => setVisible(false)}
                acceptLabel="نعم"
                rejectLabel="لا"
                acceptClassName="p-button-danger"
            />
            <div className="row g-4">
                {tickets.map((ticket) => (
                    <div className="col-12" key={ticket.id}>
                        <Card title={`المستخدم: ${ticket.username}`} className="shadow-sm">
                            <div className="d-flex flex-column gap-2">
                                <p className="mb-2">{ticket.details}</p>
                                <div className="d-flex gap-2 flex-wrap justify-content-end">
                                    {ticket.status === "Pending" && (
                                        <Button
                                            label="الموافقة"
                                            icon="pi pi-check"
                                            className="p-button-success rounded-1"
                                            onClick={() => approveTicket(ticket.id)}
                                        />
                                    )}
                                    {ticket.status === "Approved" && ticket.ticketChatId && (
                                        <Button
                                            label="دردشة"
                                            icon="pi pi-comments"
                                            className="p-button-info rounded-1"
                                            onClick={() => openChat(ticket.ticketChatId)}
                                        />
                                    )}
                                    <Button
                                        label="حذف"
                                        icon="pi pi-trash"
                                        className="p-button-danger rounded-1"
                                        onClick={() => confirmDelete(ticket.id)}
                                    />
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
