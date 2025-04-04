import { Box, Link, Typography, keyframes, useMediaQuery } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import phone from "/assets/phone.png";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import './Footer.css'



const rotateAnimation = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Footer = () => {
  const isMobile = useMediaQuery("(max-width:600px)");

  return (
    <Box sx={{ backgroundColor: "#0056D2", color: "#fff", py: 5, position: "relative", overflow: "hidden" }}>
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
          <Box
            sx={{
              width: 430,
              height: 420,
              border: "2px dashed rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              top: "10%",
              left: "10%",
              transform: "translate(-50%, -50%)",
              animation: `${rotateAnimation} 15s linear infinite`,
              display: isMobile ? "none" : "block",
            }}
          ></Box>

          <Box
            sx={{
              width: 330,
              height: 320,
              border: "2px dashed rgba(255, 255, 255, 0.5)",
              borderRadius: "50%",
              position: "absolute",
              top: "17%",
              left: "19%",
              transform: "translate(-50%, -50%)",
              animation: `${rotateAnimation} 15s linear infinite`,
              display: isMobile ? "none" : "block",
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
          />
        </Box>


        <div class="d-flex flex-column align-items-end text-end p-4" dir="">
          <h1 class="text-white fw-bold fs-1 mb-3">حمل وفّي وابدأ الآن</h1>
          <p class="text-white fw-bold fs-4 mt-2">انضم لوفّي الآن واحفظ حقك</p>
          <div className="d-flex gap-3">
            <button class="mt-3 px-3 py-2 border border-white fs-5 rounded bg-white text-black 
                 hover-bg-white hover-text-dark transition">
              تطبيق الاندرويد
              <img src="/assets/androidLogo.svg" width={30}/>

            </button>
            <button class="mt-3 px-4 py-0 border border-white text-black fs-6 rounded bg-white 
                 hover-bg-white hover-text-dark transition">
              تطبيق الايفون
              <img src="/assets/appleLogo.svg" width={30}/>
            </button>
          </div>

        </div>

      </Box>

      <Box sx={{ width: "90%", borderTop: "1px solid #fff", mt: 0, pt: 3 ,display: "flex",justifyContent: "center",margin: "auto"}}>
      <div className="footerr-top d-flex gap-5 justify-content-between px-5" dir="rtl">
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
          backgroundColor: "#0056D2",
          color: "#fff",
       
          px: 4,
          width: "100%",
        }}
      >
          {/* القسم السفلي */}
          <div className="footerr-bottom fw-600" dir="rtl">
          <div className="footerr-rights ">
            <p>وفي
              ©2024  جميع <br/>الحقوق محفوظة</p>
          </div>

          <div className="footerr-center">
            <span>Powered By Gotrah</span>
            <a href="#" className="footerr-policy">الشروط والأحكام</a>
            <a href="#" className="footerr-policy">سياسة الخصوصية</a>
          </div>

          <div className="footerr-social ">
            <a href="#"><FaXTwitter size={30} /></a>
            <a href="#"><FaInstagram size={30} /></a>
            <a href="#"><FaFacebook size={30} /></a>
          </div>
        </div>
      </Box>
    </Box>
  );
};

export default Footer;