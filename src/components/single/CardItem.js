import { Box, Button, Typography } from "@mui/material";
import React from "react";

import { Link } from "react-router-dom";

const CardItem = ({ img, title, desc, link, price }) => {
  return (
    <Box
      width={"30%"}
      padding={3}
      backgroundColor={"white"}
      borderRadius={2}
      marginBottom={5}
      boxShadow={
        "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
      }
      sx={{
        "@media(max-width:1200px)": {
          width: "40%",
        },
        "@media(max-width:900px)": {
          width: "100%",
        },
      }}
    >
      <Box>
        <img
          style={{
            width: "cover",
          }}
          src={img}
          alt={"text"}
        />
        <Box
          width="100%"
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "10px",
            textAlign: "center",
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "25px",
              marginBottom: "25px",
              "@media(max-width:1500px)": {
                fontSize: "22px",
              },
              "@media(max-width:1400px)": {
                fontSize: "19px",
              },
              "@media(max-width:1100px)": {
                fontSize: "17px",
              },
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: "17px",

              "@media(max-width:1500px)": {
                fontSize: "15",
              },
              "@media(max-width:1100px)": {
                fontSize: "13px",
              },
            }}
          >
            {desc}
          </Typography>
          <Box display={"flex"} justifyContent={"start"} alignItems={"center"}>
            {" "}
            <Box
              padding={"6px 10px"}
              borderRadius={"8px"}
              sx={{
                display: "block",
                background: "#54b5e7",
                marginLeft: "12px",
                marginTop: "25px",
                boxShadow:
                  " 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0",
              }}
            >
              {price} $
            </Box>
            <Link to={link}>
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    background: "#f2f2ff",
                  },

                  background: "#0dffd8",
                  color: "#000",
                  marginLeft: "12px",
                  marginTop: "25px",
                }}
              >
                Buy Now
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardItem;
