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
                        <Card title={`اسم التذكره: ${ticket.ticketName}`} className="shadow-sm">
                            <div className="d-flex gap-2 justify-content-end align-items-center">
                                {ticket.status === "Pending" ? (
                                    <span 
                                    style={{
                                        backgroundColor:"#F97316",
                                        padding: "10px",
                                        borderRadius: "8px",
                                        color: "#fff",
                                    }}
                                    >قيد المراجعة</span>
                                ) : (
                                    ticket.ticketChatId && (
                                        <div className="d-flex justify-content-end">
                                            <Button
                                                label="دردشة"
                                                icon="pi pi-comments"
                                                className="p-button-info rounded-1"
                                                onClick={() => openChat(ticket.ticketChatId)}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
