import { Box, Link, Typography, keyframes, useMediaQuery } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import phone from "/assets/phone.png";
import { FaFacebook, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import './Footer.css'



const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ backgroundColor: "#1347b8", color: "#fff", pt: 5, position: "relative", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",

          margin: "auto",
          px: 3,
          flexWrap: "wrap",
          position: "relative",
          flexDirection: isMobile ? "column" : "row",
          textAlign: "center",
        }}
      >
        <Box sx={{ flex: "1 1 50%", position: "relative", mb: isMobile ? 4 : 0 }}>
          {/* الدائرة الكبيرة */}
          <Box
            sx={{
              width: 476,
              height: 477,
              border: "2px dashed rgba(255, 255, 255, 1)",
              borderRadius: "50%",
              position: "absolute",
              top: "11%",
              left: "21%",
              transform: "translate(-50%, -50%)",
              animation: `${rotateAnimation} 15s linear infinite`,
              display: isMobile ? "none" : "block",
              "@media (min-width: 1600px) and (max-width: 2200px)": {
                left: "32%",
                width: 480,
                height: 480,
              },
            }}
          ></Box>

          {/* الدائرة الصغيرة */}
          <Box
            sx={{
              width: 330,
              height: 330,
              border: "2px dashed rgba(255, 255, 255, 1)",
              borderRadius: "50%",
              position: "absolute",
              top: "22%",
              left: "29%",
              transform: "translate(-50%, -50%)",
              animation: `${rotateAnimation} 15s linear infinite`,
              display: isMobile ? "none" : "block",
              "@media (min-width: 1600px) and (max-width: 2200px)": {
                left: "35%",
                width: 340,
                top: "18%",
                height: 340,
              },
            }}
          ></Box>

          <img
            src={phone}
            alt="Phone Mockup"
            style={{
              maxWidth: "75%",
              height: "auto",
              position: "relative",
              marginTop: "30px",
              marginRight: "220px",
              zIndex: 2,

            }}
            sx={{
              "@media  (max-width: 768px) ": {
                marginTop: "0",
                marginRight: "0",
              },
            }}
          />
        </Box>

        <div class="d-flex flex-column align-items-end text-end p-4" dir="">
          <h1 class="text-white fw-bold fs-1 mb-3">حمل وفّي وابدأ الآن</h1>
          <p class="text-white fw-bold fs-4 mt-2">انضم لوفّي الآن واحفظ حقك</p>

          <div className="d-flex gap-3">
            <a
              href="https://play.google.com/store/apps/details?id=com.waffy"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 px-3 py-2 border border-white fs-5 rounded bg-white text-black text-decoration-none d-flex align-items-center gap-2"
            >
              تطبيق الاندرويد
              <img src="/assets/androidLogo.svg" width="30" />
            </a>

            <a
              href="https://apps.apple.com/sa/app/%D9%88%D9%81%D9%8A-waffy/id1659421204?mt=8"
              target="_blank"
              rel="noopener noreferrer"
              class="mt-3 px-4 py-3 border border-white fs-5 rounded bg-white text-black text-decoration-none d-flex align-items-center gap-2"
            >
              تطبيق الايفون
              <img src="/assets/appleLogo.svg" width="30" />
            </a>
          </div>
        </div>


      </Box>

      <Box sx={{ width: "90%", borderTop: "1px solid #fff", mt: 0, pt: 3, display: "flex", justifyContent: "center", margin: "auto" }}>
        <div className="footerr-top d-flex gap-5 justify-content-between w-100 px-5" dir="rtl">
          <div className="footerr-logo">
            <img
              src="/assets/img/PNG-01-1-1024x658.webp"
              className="logo-img"
              alt="Image"
            />
            <p className="logo-text">
              الوسيط الآمن<br /> للتعامل بين الأفراد
            </p>
          </div>
          <div className="footerr-links ">
            <a href="#" className="footerr-link ">لماذا وفي</a>
            <a href="#" className="footerr-link">كيف تستخدم وفي</a>
            <a href="#" className="footerr-link">وفي أفراد</a>
            <a href="#" className="footerr-link">اتصل بنا</a>
          </div>
        </div>
      </Box>

      <Box
        sx={{
          width: "90%",
          borderTop: "1px solid #fff",
          mt: 5,
          pt: 2,
          display: "flex",
          justifyContent: "center",
          margin: "auto"
        }}
      />

      <Box
        sx={{
          color: "#fff",
          margin: 'auto',
          px: 4,
          width: "90%",
        }}
      >
        {/* القسم السفلي */}
        <div className="footerr-bottom fw-600" dir="rtl">
          <div className="footerr-rights ">
            <p>وفي
              ©2024  جميع <br />الحقوق محفوظة</p>
          </div>

          <div className="footerr-center">
            <span>Powered By Gotrah</span>
            <a href="#" className="footerr-policy">الشروط والأحكام</a>
            <a href="#" className="footerr-policy">سياسة الخصوصية</a>
          </div>

          <div className="footerr-social ">
            <a href="https://x.com/GetWaffyApp"><FaXTwitter size={30} /></a>
            <a href="https://www.instagram.com/getwaffyapp/"><FaInstagram size={30} /></a>
            <a href="https://www.linkedin.com/company/waffyapp/"><FaLinkedinIn size={30} /></a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;