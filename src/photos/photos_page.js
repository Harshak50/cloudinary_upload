import { useEffect, useState } from "react";
import Navbar from "../navbar/Navbar";
import axios from "axios";
import { Container } from "@mui/system";
import { Alert } from "@mui/material";

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
      var response = await axios.get(
        `https://fathomless-fjord-33378.herokuapp.com/getAllImages`
      );
      setAlertContent("Fetched Images");
      setAlertSeverity("success");
      setAlert(true);
      const data = response.data.resources;
      setRes(data);
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
          sx={{ width: "25%" }}
        >
          {alertContent}
        </Alert>
      )}
      {res.map((element) => (
        <Container sx={{ maxWidth: 300, display: "inline" }}>
          <img
          loading="lazy"
            src={element.url}
            alt="img"
            style={{
              margin: "2% auto",
              marginBottom: "10px",
              width: 300,
              height: 170,
              boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
              borderRadius: 4,
            }}
          />
        </Container>
      ))}
    </>
  );
};

export default PhotosPage;
