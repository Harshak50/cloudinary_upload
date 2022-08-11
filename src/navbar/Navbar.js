import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import "../App.css";
import CloudOutlinedIcon from "@mui/icons-material/CloudOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const pages = ["Home","View Photos"];

const Navbar = () => {
  let navigate = useNavigate(); 
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      elevation={0}
      className="navbar"
      color="secondary"
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ justifyContent: "space-between" }}>
          <Typography
            className="company"
            color="primary.main"
            sx={{ fontWeight: 500, fontSize: 28 }}
          >
            Photo{" "}
            <CloudOutlinedIcon sx={{ fontSize: "30px" }}></CloudOutlinedIcon>
          </Typography>
          <Box sx={{ display: { md: "none" } }}>
            <IconButton
              size="large"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} >
                  <Typography textAlign="center" fontFamily="Poppins" color="primary"  onClick={()=>{
                    if(page === "View Photos"){
                      return navigate("/photos");
                    }
                    navigate("/"+page)
                  }}>
                    {page}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box
            sx={{
              display: { xs: "none", md: "block" },
              flexGrow: 0,
              align: "right",
            }}
          >
            {pages.map((page, index) =>
                <Button
                  variant="outlined"
                  color="primary"
                  className="button"
                  fontFamily="Poppins"
                  sx={{
                    fontWeight: "500",
                    fontSize: "15px",
                    textTransform: "none",
                    border: "1.4px solid",
                    margin: "20px",
                    borderRadius: "5px",
                  }}
                  onClick={()=>{
                    if(page === "View Photos"){
                      return navigate("/photos");
                    }
                    navigate("/"+page)
                  }}
                >
                  {page}
                </Button>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Navbar;
