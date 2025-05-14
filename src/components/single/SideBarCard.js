import { Box, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
const SideBarCard = ({ Icon, link, name, open }) => {
  return (
    <Box
      marginTop={"20px"}
      display="flex"
      justifyContent={"center"}
      className="divCenter"
      alignItems={"center"}
      gap="16px"
      sx={{
        "@media(max-width:900px)": {
          justifyContent: "start",
          marginLeft: "6px",
        },
      }}
    >
      <Box
        sx={{
          cursor: "pointer",
          color: "white",
          fontSize: "28px",
          "@media(max-width:900px)": {
            margin: "2px 6px 0px 0px",
            display: `${open ? "block" : "none"}`,
          },
        }}
      >
        {Icon}
      </Box>
      <Box
        className="textIcon"
        display={open ? "block" : "none"}
        cursor="pointer"
      >
        <Link to={`${link}`}>
          <Typography
            sx={{
              color: "white",
              fontSize: "20px",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            {name}
          </Typography>
        </Link>
      </Box>
    </Box>
  );
};

export default SideBarCard;
