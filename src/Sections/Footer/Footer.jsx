import { Box, Link, Typography, keyframes, useMediaQuery } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import phone from "/assets/phone.png";


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

      <Box sx={{ width: "90%", borderTop: "1px solid #fff", mt: 0, pt: 3 ,display: "flex",justifyContent: "center"}}>

        
      <Typography
  variant="body1"
  sx={{
    textAlign: "start",
    fontSize: "25px",
    flexGrow: 1,
    mb: -2,
    mr: 5,
    paddingLeft: 5,
    color: "#fff",
    display: "flex",
    justifyContent: "start"
  }}
>
  الميزات&nbsp;&nbsp; الأسئلة الشائعة&nbsp;&nbsp; المدونة&nbsp;&nbsp; وَفِي أعمال&nbsp;&nbsp; التوظيف&nbsp;&nbsp; تحدث معنا
</Typography>


        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "flex-end",
            px: 3,
            pb: 2,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "right",
          }}
        >
          <Box sx={{ textAlign: "right", color: "#fff" }}>
            <Typography variant={isMobile ? "h6" : "h5"}>الوسيط الآمن</Typography>
            <Typography variant={isMobile ? "h6" : "h5"}>للبيع والشراء</Typography>
          </Box>
          <Box sx={{ width: "2px", height: "30px", backgroundColor: "#fff", mx: 2, display: isMobile ? "none" : "block" }} />
          <Typography variant={isMobile ? "h5" : "h4"} fontWeight="bold">
            وَفِي
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          width: "90%",
          borderTop: "1px solid #fff",
          mt: 5,
          pt: 3,
          display: "flex",
          justifyContent: "center"
        }}
      />

      <Box
        sx={{
          backgroundColor: "#0056D2",
          color: "#fff",
          py: 3,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            pt: 2,
            flexDirection: isMobile ? "column" : "row",
            textAlign: "center",
          }}
        >
          <Box sx={{ mb: isMobile ? 2 : 0 }}>
            <LinkedInIcon sx={{ mx: 1, fontSize: isMobile ? 30 : 40 }} />
            <InstagramIcon sx={{ mx: 1, fontSize: isMobile ? 30 : 40 }} />
            <TwitterIcon sx={{ mx: 1, fontSize: isMobile ? 30 : 40 }} />
          </Box>

          <Typography variant={isMobile ? "body1" : "h6"}>الشروط والأحكام | سياسة الخصوصية</Typography>

          <Typography variant={isMobile ? "body1" : "h6"}>© 2024 جميع الحقوق محفوظة وَفِي</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;