import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Container } from "@mui/system";
import { Alert } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const PhotosPage = () => {
  const [res, setRes] = useState([]);
  const [alert, setAlert] = useState(false);
  const [alertContent, setAlertContent] = useState("");
  const [alertSeverity, setAlertSeverity] = useState("info");
  const fetchImages = async () => {
    setAlertContent("Fetching Images");
    setAlertSeverity("info");
    setAlert(true);
    try {
      console.log("fetching");
       await fetch(
        `https://cloudinary-service.onrender.com/getAllImages`,
        {method:"GET"}
      ).then((response) => response.json())
      .then((actualData) => setRes(actualData.resources));
      setAlertContent("Fetched Images");
      setAlertSeverity("success");
      setAlert(true);
    } catch (e) {
      console.log(e);
      setAlertContent("Failed to Fetch Images");
      setAlertSeverity("error");
      setAlert(true);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      {alert && (
        <Alert
          severity={alertSeverity}
          onClose={() => {
            setAlert(false);
          }}
          sx={{ "@media (max-width: 500px)": {
            width: "80%"
          },
           "@media (min-width: 500px)": {
            width: "25%"
          }
        }}
        >
          {alertContent}
        </Alert>
      )}
      {res.map((element) => (
        <Container sx={{ maxWidth: 300, display: "inline",  }}>
        { element.url && (
            <LazyLoadImage
            style={{ margin: "1% auto",
            marginBottom: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: 4}}
            alt="img"
            height={170}
            src={element.secure_url} // use normal <img> attributes as props
            width={300} />
        
        )}
        </Container>
      ))}
    </>
  );
};

export default PhotosPage;
