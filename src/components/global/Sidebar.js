import { Box, Button, Typography } from "@mui/material";
import React from "react";
import SideBarCard from "../single/SideBarCard";
import { Link } from "react-router-dom";
import DashboardIcon from "@mui/icons-material/Dashboard";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import LogoutIcon from "@mui/icons-material/Logout";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import { useState } from "react";
import Logo from "../../img/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTiktok } from "@fortawesome/free-brands-svg-icons";
import { faCubes } from "@fortawesome/free-solid-svg-icons";

import HomeRepairServiceIcon from "@mui/icons-material/HomeRepairService";
import CardMembershipIcon from "@mui/icons-material/CardMembership";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import MoreIcon from "@mui/icons-material/More";

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <Box
        className="sidebar"
        width="90px"
        id="sidebar"
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          height: "100vh", // 👈 مهم لتمكين السكرول
          overflowY: "auto", // 👈 هذا يفعل السكرول عند وجود محتوى طويل

          "@media(max-width:900px)": {
            left: open ? "0px" : "-100%",
            width: open ? "300px" : "",
          },
          "@media(max-width:600px)": {
            left: open ? "0px" : "-100%",
            width: open ? "300px" : "",
          },
        }}
      >
        <Box
          backgroundColor="#0000ff"
          top="0"
          left={"0px"}
          paddingTop={"54px"}
          paddingBottom={"54px"}
        >
          <Box
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            gap="16px"
            marginBottom="80px"
          >
            <Box
              onClick={() => setOpen(false)}
              cursor="pointer"
              sx={{
                "@media(max-width:900px)": {
                  //display: "none",
                  display: `${open ? "block" : "none"}`,
                },
              }}
            >
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                }}
                alt={"logo"}
                src={Logo}
              />
            </Box>
            <Box
              marginTop={"-12px"}
              onClick={() => setOpen(false)}
              className="textIcon"
              display={open ? "block" : "none"}
              cursor="pointer"
            >
              <Link to="/dashboard">
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "22px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Digital DZ
                </Typography>
              </Link>
            </Box>
          </Box>
          <SideBarCard
            open={open}
            Icon={<DashboardIcon />}
            name={"Dashboard"}
            link={"/dashboard"}
          />

          <SideBarCard
            open={open}
            Icon={<LocalGroceryStoreIcon />}
            name={"Orders"}
            link={"/orders"}
          />
          <SideBarCard
            open={open}
            Icon={<FacebookIcon />}
            name={"Facebook"}
            link={"/facebook"}
          />
          <SideBarCard
            open={open}
            Icon={
              <FontAwesomeIcon
                style={{
                  fontSize: "22px",
                }}
                icon={faTiktok}
              />
            }
            name={"Tiktok"}
            link={"/tiktok"}
          />

          <SideBarCard
            open={open}
            Icon={<HomeRepairServiceIcon />}
            name={"Services"}
            link={"/services"}
          />
          <SideBarCard
            open={open}
            Icon={<CardMembershipIcon />}
            name={"Courses"}
            link={"/courses"}
          />
          <SideBarCard
            open={open}
            Icon={<ManageAccountsIcon />}
            name={"Accounts"}
            link={"/accounts"}
          />
          <SideBarCard
            id="hh"
            open={open}
            Icon={<SubscriptionsIcon />}
            name={"Subscriptions"}
            link={"/subscriptions"}
          />

          <SideBarCard
            open={open}
            Icon={
              <FontAwesomeIcon
                style={{
                  fontSize: "22px",
                }}
                icon={faCubes}
              />
            }
            name={"Package"}
            link={"/package"}
          />
          <SideBarCard
            open={open}
            Icon={<MoreIcon />}
            name={"Other"}
            link={"/other"}
          />

          <Box
            onClick={() => setOpen(false)}
            marginTop={"40px"}
            display="flex"
            justifyContent={"center"}
            className="divCenter"
            alignItems={"center"}
            gap="16px"
            sx={{
              "@media(max-width:900px)": {
                justifyContent: "start",
                marginLeft: "20px",
              },
            }}
          >
            <Box
              sx={{
                "@media(max-width:900px)": {
                  //display: "none",
                  display: `${open ? "block" : "none"}`,
                },
              }}
            >
              <LogoutIcon
                sx={{
                  cursor: "pointer",
                  color: "white",
                  fontSize: "25px",
                  fontWeight: "bold",
                }}
              />
            </Box>
            <Box
              className="textIcon"
              display={open ? "block" : "none"}
              cursor="pointer"
            >
              <Typography
                onClick={() => {
                  localStorage.clear();
                  window.location.pathname = "/user";
                }}
                sx={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Logout
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          marginLeft: "25px",
          cursor: "pointer",
          display: "none",
          "@media(max-width:900px)": {
            display: "Block",
          },
        }}
      >
        <Button
          sx={{
            marginTop: "25px",
            marginLeft: `${open ? "280px" : ""}`,
            transition: "1s",
          }}
          onClick={() => {
            setOpen(!open);
          }}
        >
          <MenuIcon sx={{ fontSize: "33px" }} />
        </Button>
      </Box>
    </>
  );
};

export default Sidebar;
