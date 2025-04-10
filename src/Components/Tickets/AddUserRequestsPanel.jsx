import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AddUserRequestsPanel({ addUserRequests, approveAddUserRequest }) {
    return (
        <div style={{ marginTop: "2rem" }}>

            {/* عرض الطلبات داخل Cards */}
            <div className="p-d-flex p-flex-column">
                {addUserRequests.map((req) => (
                    <Card key={req.id} className="mb-3" title={`طلب إضافة مستخدم`}>
                        <p>User {req.requestingUserId} wants to add User {req.userIdToAdd} to Chat {req.chatId}</p>
                        <Button
                            label="موافقة"
                            icon="pi pi-check"
                            className="p-button-success"
                            onClick={() => approveAddUserRequest(req.id)}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}
