import { Box, Button, Typography, keyframes, useMediaQuery } from "@mui/material";
import AppleIcon from "@mui/icons-material/Apple";
import AndroidIcon from "@mui/icons-material/Android";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import phone from "../../assets/phone.png";

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
          maxWidth: "1200px",
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
              maxWidth: "100%",
              height: "auto",
              position: "relative",
              marginTop: "50px",
              zIndex: 2,
            }}
          />
        </Box>

        <Box sx={{ flex: "1 1 50%" }}>
          <Typography variant={isMobile ? "h4" : "h2"} fontWeight="bold">
            حمل وَفِي وابدأ الآن
          </Typography>
          <Typography variant={isMobile ? "h6" : "h5"} sx={{ my: 2 }}>
            انضم لوفِي الآن واحفظ حقك
          </Typography>

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2, flexDirection: isMobile ? "column" : "row" }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                display: "flex",
                alignItems: "center",
                px: 2,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#ddd" },
              }}
            >
              <AndroidIcon sx={{ mr: 1 }} />
              تطبيق الأندرويد
            </Button>

            <Button
              variant="contained"
              sx={{
                backgroundColor: "#fff",
                color: "#000",
                display: "flex",
                alignItems: "center",
                px: 2,
                borderRadius: "8px",
                "&:hover": { backgroundColor: "#ddd" },
              }}
            >
              <AppleIcon sx={{ mr: 1 }} />
              تطبيق الآيفون
            </Button>
          </Box>
        </Box>
      </Box>

      <Box sx={{ width: "100%", borderTop: "1px solid #fff", mt: 0, pt: 3 }}>

      <Typography 
  variant="body1" 
  sx={{ 
    textAlign: "start", 
    fontSize: "25px", 
    flexGrow: 1, 
    mb: -2, 
    mr: 5, 
    paddingLeft:5,
    color: "#fff", 
    display: "flex",
    justifyContent: "start"
  }}
>
  الميزات | الأسئلة الشائعة | المدونة | وَفِي أعمال | التوظيف | تحدث معنا
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

      {/* الخط الأبيض بعرض الصفحة بالكامل تحت الصورة */}
      <Box
        sx={{
          width: "100%",
          borderTop: "1px solid #fff",
          mt: 5,
          pt: 3,
        }}
      />

      {/* الجزء السفلي */}
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
          {/* الأيقونات في أقصى اليسار */}
          <Box sx={{ mb: isMobile ? 2 : 0 }}>
            <LinkedInIcon sx={{ mx: 1, fontSize: isMobile ? 30 : 40 }} />
            <InstagramIcon sx={{ mx: 1, fontSize: isMobile ? 30 : 40 }} />
            <TwitterIcon sx={{ mx: 1, fontSize: isMobile ? 30 : 40 }} />
          </Box>

          {/* "الشروط والأحكام | سياسة الخصوصية" في المنتصف */}
          <Typography variant={isMobile ? "body1" : "h6"}>الشروط والأحكام | سياسة الخصوصية</Typography>

          {/* "© 2024 جميع الحقوق محفوظة وَفِي" في أقصى اليمين */}
          <Typography variant={isMobile ? "body1" : "h6"}>© 2024 جميع الحقوق محفوظة وَفِي</Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
