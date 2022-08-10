import {  Alert, Button, CircularProgress, Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import {  Fragment, useEffect, useRef, useState } from "react";
import Navbar from "../navbar/Navbar";
import "./Homepage.css";
import HomePageBackground from "./home_bg";
import folder from "../assets/folder.png";
import CloseIcon from "@mui/icons-material/Close";

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const drop = useRef(null);

  useEffect(() => {
    drop.current.addEventListener("dragover", handleDragOver);
    drop.current.addEventListener("drop", handleDrop);
    return () => {
      drop.current.removeEventListener("dragover", handleDragOver);
      drop.current.removeEventListener("drop", handleDrop);
    };
  }, []);

  const uploadImage = (e) => {
    e.preventDefault();
    const formData = new FormData();
    console.log("Called upload image");
    if (file === null) {
      setAlertContent("No File Selected");
        setAlertSeverity("Warning");
        setAlert(true);
    }

    formData.append("file", file[0]);
    formData.append("upload_preset", "fnfhl9jd");
    console.log(formData.get("file"));
    console.log(formData.get("upload_preset"));
    setLoading(true);

    setAlertContent("Uploading File");
    setAlertSeverity("success");
    setAlert(true);

    try {
      const data = fetch(
        `https://api.cloudinary.com/v1_1/drbdcglkp/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      setLoading(false);
      if (data.asset_id !== null) {
        setAlertContent("Successfully Uploaded Image");
        setAlertSeverity("success");
        setAlert(true);
      }
      setFile(null);
    } catch (error) {
      setLoading(false);
      setAlertContent("Failed to upload Image ");
        setAlertSeverity("error");
        setAlert(true);
    }
  };

  const changeHandler = (e) => {
    setFile(e.target.files);
    console.log(e.target.files);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setFile(null);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const { files } = e.dataTransfer;
    if (files && files.length) {
      setFile(files);
      console.log(files);
      console.log(files[0].name);
    }
  };
  return (
    <>
     
      <Navbar />
      <HomePageBackground />
      {alert  &&
       <Alert
            severity={alertSeverity}
            onClose = {()=>{setAlert(false)}}
            sx={{ width: "25%" }} >
           {alertContent}
          </Alert>
    }
      <Box
        maxWidth="xs"
        sx={{
          bgcolor: "#fff",
          height: 300,
          "@media (min-width: 780px)": {
            width: 500,
            transform: "translate(0%, -100%)",
          },
          width: 350,
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
           {/* Drag and drop box */}
        <Box ref={drop}>
          {file === null ? (
            <Stack
              direction="column"
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
              }}
            >
              <Typography
                color="primary"
                fontFamily="Poppins"
                sx={{ color: "#cccccc", display: "block" }}
              >
                {" "}
                Drag & Drop files here to upload{" "}
              </Typography>
              <>
                <Fragment>
                  <input
                    type="file"
                    accept="image/*"
                    id="icon-button-file"
                    style={{ display: "none" }}
                    onChange={changeHandler}
                  />
                  <label htmlFor="icon-button-file">
                    <Button
                      variant="contained"
                      fontFamily="Poppins"
                      component="span"
                      sx={{
                        display: "block",
                        fontWeight: "500",
                        fontSize: "15px",
                        textTransform: "none",
                        margin: "20px",
                        borderRadius: "5px",
                        ":hover": {
                          backgroundColor: "#ff5d3d",
                          color: "#ffffff",
                        },
                      }}
                    >
                      <Typography
                        fontFamily="Poppins"
                        sx={{ color: "white", display: "block" }}
                      >
                        {" "}
                        Browse Images
                      </Typography>
                    </Button>
                  </label>
                </Fragment>
              </>
            </Stack>
          ) : (
            <Stack direction="row">
              <Stack
                direction="column"
                maxWidth="xs"
                sx={{ margin: "5% auto" }}
              >
                <Stack direction="row" sx={{ margin: "2% auto" }}>
                  <img
                    src={folder}
                    style={{ height: "30px", width: "30px" }}
                    alt="file"
                  ></img>
                  <Typography
                    color="primary"
                    sx={{
                      margin: "auto",
                      fontSize: "12px",
                      paddingLeft: "10px",
                    }}
                    fontFamily="Poppins"
                  >
                    {file[0].name.toString()}
                  </Typography>
                </Stack>
                <img
                  src={URL.createObjectURL(file[0])}
                  style={{ height: 100, margin: "0% auto" }}
                  alt="file"
                ></img>
                <Button
                  variant="contained"
                  fontFamily="Poppins"
                  component="span"
                  onClick={uploadImage}
                  sx={{
                    display: "block",
                    fontWeight: "500",
                    fontSize: "15px",
                    textTransform: "none",
                    margin: "12% auto",
                    width: "65%",
                    borderRadius: "5px",
                    ":hover": {
                      backgroundColor: "#ff5d3d",
                      color: "#ffffff",
                    },
                  }}
                >
                {  loading ?(<Box sx={{ display: 'flex', justifyContent:"center" }}>
                        <CircularProgress size="1.5rem" sx={{color:"#fff"}} />
                       </Box>)
                :  <Typography>Upload Image</Typography>
}
    
                </Button>
              </Stack>
              <CloseIcon
                maxWidth="300"
                onClick={() => {
                  setFile(null);
                }}
                sx={{
                  display: "flex",
                  alignItems: "flex-start",
                  justifyContent: "right",
                  padding: "2%",
                }}
              ></CloseIcon>
            </Stack>
          )}
        </Box>
      </Box>
    </>
  );
};
export default HomePage;
