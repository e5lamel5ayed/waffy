import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./login.css";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const clientId = "253049583987-ttskesid08shpobn9mensung1ma3opfk.apps.googleusercontent.com";
  useEffect(() => {
    setTimeout(() => {
      const googleButton = document.querySelector("div[aria-labelledby]");
      if (googleButton) {
        googleButton.style.width = "100%";
        googleButton.style.height = "55px";
      }
    }, 500);
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://waffi.runasp.net/api/Account/Login", {
        phoneNumber: phone,
        password: password,
      });

      if (response.data.isSuccess && response.data.data.token) {
        localStorage.setItem("token", response.data.data.token);
        navigate("/");
      } else {
        setError("حدث خطأ، لم يتم استلام التوكن!");
      }
    } catch {
      setError("فشل تسجيل الدخول، تحقق من البيانات!");
    }
  };

  const handleGoogleLoginSuccess = async (response) => {
    try {
      const { credential } = response;
      const res = await axios.post("https://waffi.runasp.net/api/Account/GoogleLogin", {
        idToken: credential,
      });

      if (res.data.isSuccess && res.data.data.token) {
        localStorage.setItem("token", res.data.data.token);
        navigate("/");
      } else {
        setError("فشل تسجيل الدخول عبر جوجل!");
      }
    } catch {
      setError("حدث خطأ أثناء تسجيل الدخول عبر جوجل! ");
    }
  };

  const handleGoogleLoginFailure = () => {
    setError("فشل تسجيل الدخول عبر جوجل!");
  };

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="bg-white" style={{ height: "130vh" }}>
        <div className="nav-bar bg-white">
          <div className="container w-75 d-flex justify-content-between align-items-center">
            <button className="btnn border px-4 d-flex align-items-center">
              تواصل معنا
              <img src="/src/assets/img/whatsapp.svg" className="text-success mx-2" alt="WhatsApp" />
            </button>
            <Link to="/" style={{ textDecoration: "none" }}>
              <h3 className="fw-bold m-0 text-dark">وفّي</h3>
            </Link>
          </div>
        </div>

        <div className="top-section" />
        <div className="profile-img">
          <img src="/src/assets/img/auth.svg" alt="Profile" className="img-fluid" />
        </div>

        <div className="container text-center phone-card mt-1">
          <h3 className="fw-bold">أهلًا بك في وفـي، أدخل رقم جوالك وكلمة المرور</h3>

          <form className="p-3 mx-auto" style={{ maxWidth: 440 }} onSubmit={handleLogin}>
            {error && <div className="alert alert-danger">{error}</div>}

            <div className="input-group mb-3">
              <span className="input-group-text py-3">
                <img src="/src/assets/img/saudi_flag.svg" alt="SA" width="30" />
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
              <span className="input-group-text py-3">
                <i className="fas fa-lock"></i>
              </span>
              <input
                type="password"
                className="form-control"
                placeholder="كلمة المرور"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                style={{ height: "59px" }}
              />
            </div>

            <button type="submit" className="next mt-3 w-100 fw-bold">تسجيل الدخول</button>
            <div className="mt-3">
              <GoogleLogin
                onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginFailure} />
            </div>
            <div className="mt-4">
              <Link to="/register" style={{ textDecoration: "none" }}>
                <p className="m-0 text-dark">انشاء حساب جديد ؟</p>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
