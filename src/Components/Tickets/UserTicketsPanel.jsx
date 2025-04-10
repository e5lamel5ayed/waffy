// UserTicketsPanel.jsx
import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function UserTicketsPanel({ tickets, openChat }) {
    if (!tickets.length) {
        return <p>لا توجد تذاكر لعرضها</p>;
    }

    return (
        <div className="container" dir="rtl">
            <div className="row g-4">
                {tickets.map((ticket) => (
                    <div className="col-12" key={ticket.id}>
                        <Card title={`التذكرة: ${ticket.details}`} className="shadow">
                            <p className="mb-3">{ticket.details}</p>
                            {ticket.ticketChatId && (
                                <div className="d-flex justify-content-end">
                                    <Button
                                        label="دردشة"
                                        icon="pi pi-comments"
                                        className="p-button-info"
                                        onClick={() => openChat(ticket.ticketChatId)}
                                    />
                                </div>
                            )}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
