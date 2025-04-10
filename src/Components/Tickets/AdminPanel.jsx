import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AdminPanel({ tickets, approveTicket, openChat }) {
    return (
        <div className="container" dir="rtl">
            <div className="row g-4">
                {tickets.map((ticket) => (
                    <div className="col-12" key={ticket.id}>
                        <Card title={`المستخدم: ${ticket.username}`} className="shadow">
                            <p className="mb-3">{ticket.details}</p>
                            <div className="d-flex gap-2 justify-content-end">
                                {ticket.status === "Pending" && (
                                    <Button
                                        label="الموافقة"
                                        icon="pi pi-check"
                                        className="p-button-success"
                                        onClick={() => approveTicket(ticket.id)}
                                    />
                                )}
                                {ticket.status === "Approved" && ticket.ticketChatId && (
                                    <Button
                                        label="دردشة"
                                        icon="pi pi-comments"
                                        className="p-button-info"
                                        onClick={() => openChat(ticket.ticketChatId)}
                                    />
                                )}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
