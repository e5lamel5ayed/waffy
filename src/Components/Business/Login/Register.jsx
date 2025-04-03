import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import './login.css';

const Register = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            setError("كلمة المرور وتأكيدها غير متطابقين!");
            return;
        }

        try {
            const response = await axios.post("https://waffi.runasp.net/api/Account/Register", {
                UserName: name,
                phoneNumber: phone,
                password: password,
                confirmPassword: confirmPassword
            });

            if (response.data.isSuccess) {
                navigate("/login");
            } else {
                setError("حدث خطأ أثناء التسجيل!");
            }
        } catch {
            setError("فشل إنشاء الحساب، تحقق من البيانات!");
        }
    };

    return (
        <div className="bg-white" style={{ height: '130vh' }}>
            <div className="nav-bar bg-white">
                <div className="container w-75 d-flex justify-content-between align-items-center">
                    <button className="btnn border px-4 d-flex align-items-center">
                        تواصل معنا
                        <img src="/assets/img/whatsapp.svg" className="text-success mx-2" alt="WhatsApp" />
                    </button>
                    <Link to="/" style={{ textDecoration: "none" }}>
                        <h3 className="fw-bold m-0 text-dark">وفّي</h3>
                    </Link>
                </div>
            </div>

            <div className="top-section" />
            <div className="profile-img">
                <img src="/assets/img/auth.svg" alt="Profile" className="img-fluid" />
            </div>

            <div className="container text-center phone-card mt-1" style={{ marginBottom: '50px' }}>
                <h3 className="fw-bold">إنشاء حساب جديد</h3>

                <form className="p-3 mx-auto" style={{ maxWidth: 440 }} onSubmit={handleRegister}>
                    {error && <div className="alert alert-danger">{error}</div>}

                    <div className="input-group mb-3">
                        <span className="input-group-text py-4 px-3">
                            <i className="fas fa-user"></i> {/* أيقونة الاسم */}
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="اسم المستخدم"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required

                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text py-3 px-3">
                            <img src="/assets/img/saudi_flag.svg" alt="SA" width="15" />
                        </span>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="+966 567XXXXXX"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text py-3 px-3">
                            <i className="fas fa-lock"></i>
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="كلمة المرور"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={{ height: '59px' }}
                        />
                    </div>

                    <div className="input-group mb-3">
                        <span className="input-group-text py-3 px-3">
                            <i className="fas fa-check-circle"></i> {/* أيقونة تأكيد كلمة المرور */}
                        </span>
                        <input
                            type="password"
                            className="form-control"
                            placeholder="تأكيد كلمة المرور"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            style={{ height: '59px' }}
                        />
                    </div>

                    <button type="submit" className="next mt-3 w-100 fw-bold">إنشاء الحساب</button>
                    <div className="mt-4">
                        <Link to="/login" style={{ textDecoration: "none" }}>
                            <p className="m-0 text-dark"> تسجيل الدخول ؟</p>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;