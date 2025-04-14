import React from "react";
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';

export default function SubmitTicketForm({
    formData,
    setFormData,
    submitTicket
}) {
    const feeOptions = [
        { label: 'البائع', value: 'البائع' },
        { label: 'المشتري', value: 'المشتري' },
        { label: 'الطرفين', value: 'الطرفين' }
    ];

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    return (
        <div className="p-fluid">
            <div className="mb-3">
                <InputText
                    placeholder="اسم المعاملة"
                    value={formData.ticketName}
                    onChange={(e) => handleChange("ticketName", e.target.value)}
                />
            </div>

            <div className="mb-3">
                <InputText
                    placeholder="اسم المنتج أو الخدمة"
                    value={formData.productOrServiceName}
                    onChange={(e) => handleChange("productOrServiceName", e.target.value)}
                />
            </div>

            <div className="mb-3">
                <InputTextarea
                    placeholder="وصف المنتج أو الخدمة"
                    value={formData.productOrServiceDescription}
                    onChange={(e) => handleChange("productOrServiceDescription", e.target.value)}
                    rows={3}
                    autoResize
                />
            </div>

            <div className="mb-3">
                <InputText
                    placeholder="السعر"
                    type="number"
                    value={formData.price}
                    onChange={(e) => handleChange("price", parseFloat(e.target.value))}
                />
            </div>

            <div className="mb-3">
                <Dropdown
                    value={formData.feeResponsibility}
                    options={feeOptions}
                    onChange={(e) => handleChange("feeResponsibility", e.value)}
                    placeholder="اختر المسؤول عن الرسوم"
                />
            </div>

            <div className="mb-3">
                <InputText
                    placeholder="اسم المستخدم للطرف الآخر"
                    value={formData.otherPartyUsername}
                    onChange={(e) => handleChange("otherPartyUsername", e.target.value)}
                />
            </div>

            <Button
                label="إرسال التذكرة"
                icon="pi pi-send"
                onClick={submitTicket}
                className="w-100 rounded-1"
            />
        </div>
    );
}
