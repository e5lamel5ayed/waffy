import React from "react";
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

export default function AddUserRequestsPanel({ addUserRequests, approveAddUserRequest }) {
    return (
        <div style={{ marginTop: "2rem" }}>
            <div className="p-d-flex p-flex-column">
                {addUserRequests.map((req) => (
                    <Card key={req.id} className="mb-3 shadow-sm" >
                        <p>
                            المستخدم
                            <strong>
                                {req.requestingUserName}
                            </strong> يرغب في إضافة المستخدم <strong>{req.userToAddName}</strong> إلى المحادثة <strong>{req.ticketName}</strong>
                        </p>
                        <Button
                            label="موافقة"
                            icon="pi pi-check"
                            className="p-button-success rounded-1"
                            onClick={() => approveAddUserRequest(req.id)}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}
