import { Button, Typography } from "@mui/material";
import { Box, Container, Stack } from "@mui/system";
import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import img from "../assets/img.png";

const HomePage = () => {
  return (
    <>
      <Navbar />
        <Box
          maxWidth="md"
          sx={{
            zIndex: "tooltip",
            bgcolor: "#F5FAFB",
            height: 450,
            margin: "7% auto",
            borderRadius: "20px",
          }}
        >
          <Stack direction="row">
            <img
              alt="img"
              src={img}
              style={{
                height: "15%",
                width: "15%",
                margin: "7% auto",
                transform: "rotate(10deg)",
              }}
            ></img>
            <Box sx={{ margin: "auto", marginLeft: "0%" }}>
              <Typography
                style={{ fontSize: "35px" }}
                color="primary"
                fontFamily="Poppins"
                className="upload_title"
              >
                Secure Cloud Storage &
              </Typography>
              <Typography
                style={{ fontSize: "35px", color: "#1B1A17" }}
                fontFamily="Poppins"
                className="upload_title"
              >
                Media Platform
              </Typography>
              <Typography style={{ color: "#3a36e4" }}>
                Grab Premium Account today. Check out our awesome deal!
              </Typography>
            </Box>
          </Stack>
        </Box>

        <Box maxWidth="xs"
          sx={{
            bgcolor: "#fff",
            height: 300,
            '@media (min-width: 780px)' : {
              width: 500,
              transform: "translate(0%, -100%)",
            },
            width: 200,
            justifyContent: "center",
            border: "1px solid #fff",
            boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
            borderRadius: 5,
            fontSize: "0.875rem",
            transform: "translate(0%, -60%)",
            fontWeight: "700",
            margin: "auto",
            zIndex: "modal",
          }}
        >


          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
              bgcolor: "#F5FAFB",
              height: 250,
              transform: "translate(0%, -3%)",
              width: "88%%",
              margin: "6%",
            }}>
            <Stack direction="column">
              <Typography
              color="primary"
                fontFamily="Poppins"
                sx={{ color: "#cccccc", display: "block" }}
              >
                Drag & Drop files here to upload
              </Typography>
              <Button
                variant="contained"
                className="button"
                fontFamily="Poppins"
                sx={{
                  display: "block",
                  fontWeight: "500",
                  fontSize: "15px",
                  textTransform: "none",

                  margin: "20px",
                  borderRadius: "5px",
                  ':hover': {
                    backgroundColor:'#ff5d3d',
                    color: '#ffffff',
                  },
                }}
              >
                {" "}
                <Typography
                  fontFamily="Poppins"
                  sx={{ color: "white", display: "block" }}> Upload Image</Typography>
              </Button>
            </Stack>
          </Box>




        </Box>
    </>
  );
};
export default HomePage;
