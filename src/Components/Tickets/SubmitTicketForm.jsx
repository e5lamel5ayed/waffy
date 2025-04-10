import React from "react";
import { InputTextarea } from 'primereact/inputtextarea';
import { Button } from 'primereact/button';

export default function SubmitTicketForm({ details, setDetails, submitTicket }) {
    return (
        <div className="p-fluid">
            <div className="mb-3">
                <InputTextarea
                    placeholder="تفاصيل التذكرة"
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    rows={5}
                    autoResize
                    className="w-100"
                />
            </div>
            <Button
                label="إرسال التذكرة"
                icon="pi pi-send"
                onClick={submitTicket}
                className="w-100"
            />
        </div>
    );
}
