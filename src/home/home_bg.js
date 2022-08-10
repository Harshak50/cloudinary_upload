import {  Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import img from "../assets/img.png";


const HomePageBackground = ()=>{
    return(
        <Box
        maxWidth="md"
        sx={{
          "@media (max-width: 800px)": {
            width:350,
            height:500
          },
          zIndex: "tooltip",
          bgcolor: "#F5FAFB",
          height: 450,
          margin: "6% auto",
          borderRadius: "20px",
        }}
      >
        <Stack direction="row">

          <img
            alt="img"
            src={img}
            style={{
              display: { xs: "none", md: "block" },
              height: "15%",
              width: "15%",
              margin: "7% auto",
              transform: "rotate(10deg)",
            }}
          ></img>

          <Box sx={{ margin: "auto", marginLeft: "0%" }}>
            <Typography
              style={{
                fontSize: "35px",
                "@media (max-width: 500px)": {
                  fontSize: "15px",
                },
              }}
              color="primary"
              fontFamily="Poppins"
              className="upload_title"
            >
              Secure Cloud Storage &
            </Typography>
            <Typography
              style={{
                fontSize: "35px",
                color: "#1B1A17",
                "@media (max-width: 800px)": {
                  fontSize: "15px",
                },
              }}
              fontFamily="Poppins"
              className="upload_title"
            >
              Media Platform
            </Typography>
            <Typography
             style={{ color: "#3a36e4" }}>
              Grab Premium Account today. Check out our awesome deal!
            </Typography>
          </Box>
        </Stack>
      </Box>
    )
}
export default HomePageBackground;