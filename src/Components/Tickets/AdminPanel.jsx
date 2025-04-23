import React, { useState } from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { ConfirmDialog } from 'primereact/confirmdialog';
import { Dialog } from 'primereact/dialog';

export default function AdminPanel({ tickets, approveTicket, deleteTicket, openChat }) {
    const [confirmVisible, setConfirmVisible] = useState(false);
    const [selectedTicketId, setSelectedTicketId] = useState(null);
    const [dialogVisible, setDialogVisible] = useState(false);
    const [selectedTicket, setSelectedTicket] = useState(null);

    const confirmDelete = (ticketId) => {
        setSelectedTicketId(ticketId);
        setConfirmVisible(true);
    };

    const handleAccept = () => {
        deleteTicket(selectedTicketId);
        setConfirmVisible(false);
    };

    const showDetails = (ticket) => {
        setSelectedTicket(ticket);
        setDialogVisible(true);
    };

    return (
        <div className="container" dir="rtl">
            {/* Dialog for confirming delete */}
            <ConfirmDialog
                visible={confirmVisible}
                onHide={() => setConfirmVisible(false)}
                message="هل أنت متأكد أنك تريد حذف هذه التذكرة؟"
                header="تأكيد الحذف"
                icon="pi pi-exclamation-triangle"
                accept={handleAccept}
                reject={() => setConfirmVisible(false)}
                acceptLabel="نعم"
                rejectLabel="لا"
                acceptClassName="p-button-danger"
            />

            {/* Dialog for showing ticket details */}
            <Dialog header="تفاصيل التذكرة" visible={dialogVisible} onHide={() => setDialogVisible(false)} style={{ width: '40vw' }} breakpoints={{ '960px': '80vw' }}>
                {selectedTicket && (
                    <div style={{ direction: 'rtl', textAlign: 'right', lineHeight: '2', padding: '10px' }}>
                        <div><strong>اسم التذكرة:</strong> {selectedTicket.ticketName}</div>
                        <div><strong>اسم المستخدم:</strong> {selectedTicket.username}</div>
                        <div><strong>الطرف الآخر:</strong> {selectedTicket.otherPartyUsername}</div>
                        <div><strong>اسم المنتج / الخدمة:</strong> {selectedTicket.productOrServiceName}</div>
                        <div><strong>الوصف:</strong> {selectedTicket.productOrServiceDescription}</div>
                        <div><strong>السعر:</strong> {selectedTicket.price} </div>
                        <div><strong>مسؤول الرسوم:</strong> {selectedTicket.feeResponsibility}</div>
                        <div>
                            <strong>تاريخ الإنشاء:</strong>{" "}
                            {new Date(selectedTicket.createdAt.replace(/Z$/, "")).toLocaleString("eg-EG", {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit',
                                hour: '2-digit',
                                minute: '2-digit',
                                second: '2-digit',
                                hour12: true
                            })}
                        </div>
                        <div><strong>الحالة:</strong>
                            <span style={{ fontWeight: 'bold', color: selectedTicket.status === "Approved" ? 'green' : 'orange', marginRight: '5px' }}>
                                {selectedTicket.status === "Approved" ? "موافقة" : selectedTicket.status === "Pending" ? "قيد الانتظار" : selectedTicket.status}
                            </span>
                        </div>
                    </div>
                )}

            </Dialog>

            {/* Ticket cards */}
            <div className="row g-4">
                {tickets.map((ticket) => (
                    <div className="col-12" key={ticket.id}>
                        <Card title={`اسم التذكرة: ${ticket.ticketName}`} className="shadow-sm">
                            <div className="d-flex flex-column gap-2">
                                <div className="d-flex gap-2 flex-wrap justify-content-end">
                                    <Button
                                        label="عرض التفاصيل"
                                        icon="pi pi-eye"
                                        className="p-button-secondary rounded-1"
                                        onClick={() => showDetails(ticket)}
                                    />
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
