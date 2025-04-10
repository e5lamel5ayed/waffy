import React from "react";

export default function AddUserSection({ userToAdd, setUserToAdd, requestAddUser }) {
    return (
        <div style={{ marginTop: "20px" }}>
            <h4>إضافة مستخدم للمحادثة</h4>
            <input
                type="text"
                placeholder="اسم المستخدم المراد إضافته"
                value={userToAdd}
                onChange={(e) => setUserToAdd(e.target.value)}
                style={{ marginRight: "10px" }}
            />
            <button onClick={requestAddUser}>إضافة</button>
        </div>
    );
}
