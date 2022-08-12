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
        <Container sx={{ maxWidth: 300, display: "inline",  }}>
        { element.url && (
            <LazyLoadImage
            style={{ margin: "1% auto",
            marginBottom: "10px",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            borderRadius: 4}}
            alt="img"
            height={170}
            src={element.url} // use normal <img> attributes as props
            width={300} />
        
        )}
        </Container>
      ))}
    </>
  );
};

export default PhotosPage;
