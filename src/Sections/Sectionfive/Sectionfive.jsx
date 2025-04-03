import React from "react";
import CountUp from "react-countup";
import { Box, Typography, Button, Grid } from "@mui/material";
import star from "/assets/star.png";
import check from "/assets/check.png";
import user from "/assets/user.png";

//----------------------------------------------------
const stats = [
  { 
    id: 1, 
    value: 4.8, 
    label: "تقييم المستخدمين", 
    iconClass: "ion-ios-star", 
    image: star, 
  },
  { 
    id: 2, 
    value: 22000, 
    label: "معاملة نشطة", 
    iconClass: "ion-md-checkmark-circle-outline", 
    image: check, 
  },
  { 
    value: 75000, 
    label: "مستخدم", 
    iconClass: "ion-md-person", 
    image: user, 
  },
];

const Sectionfive = () => {
  return (
    <Box sx={{ textAlign: "center", py: 6,marginTop:'50px', backgroundImage:'linear-gradient(70deg, rgba(4, 247, 251, 0.08), rgba(254, 252, 249, 0.32))' ,padding:"80px" }}>
     
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          mb: 6,
          color: "#10212e",
          fontSize: { xs: "25px", sm: "30px", md: "35px", lg: "42px" },
        }}
      >
        وَفي أرقام
      </Typography>

      <Grid container spacing={3} gap={5} justifyContent="center">
        {stats.map((stat) => (
          <Grid item xs={12} sm={3} key={stat.id} className="bg-white py-2 px-5 text-end" style={{borderRadius:'8px'}} >
           
            <Box sx={{ display: "flex", alignItems: "center", justifyContent: "end", gap: 1.5}}>
              <Typography 
                variant="h3" 
                sx={{ 
                  fontWeight: "bold", 
                  color: "#000",
                  fontSize: { xs: "30px", sm: "38px", md: "45px", lg: "50px" } 
                }}
              >
                <CountUp end={stat.value} duration={2.5} separator="," />+
              </Typography>
              <i className={stat.iconClass} style={{ fontSize: "40px", color: "#00E0BF" }}></i>
              <img src={stat.image} alt="icon" style={{ width: "45px", height: "45px", borderRadius: "50%" }} />
            </Box>

            <Typography variant="subtitle1" sx={{ color: "#666", mt: 1, fontSize: { xs: "30px", sm: "18px",  } , }}>
              {stat.label}
            </Typography>
          </Grid>
        ))}
      </Grid>

      <Button
        variant="contained"
        sx={{ 
          mt: 4, 
          px: { xs: 3, sm: 4 }, 
          py: { xs: 1, sm: 1.5 }, 
          backgroundColor: "#1448A8", 
          fontSize: { xs: "20px", sm: "25px" }, 
          borderRadius: "8px" 
        }}
      >
        انضم الآن
      </Button>
    </Box>
  );
};

export default Sectionfive;
