import React from "react";
import Header from "../global/Header.js";
import { Box } from "@mui/material";

import CardItem from "../single/CardItem.js";
import { data } from "../../data.js";
import { useParams } from "react-router-dom";
import Error from "../single/Error.js";

const PageServices = () => {
  const { service } = useParams();
  const Allservices = data.map((item) => item[0].service);
  let newData = [];
  if (Allservices.includes(service)) {
    newData = data.filter((item) => item[0].service === service)[0].slice(1);
  } else {
    return <Error />;
  }

  return (
    <Box
      padding={5}
      paddingTop="60px"
      paddingLeft="40px"
      width={"100%"}
      sx={{
        "@media(max-width:900px)": {
          paddingLeft: "40px",
        },
        "@media(max-width:600px)": {
          padding: "60px 6px",
        },
      }}
    >
      <Box
        padding={3}
        backgroundColor={"white"}
        borderRadius={2}
        marginBottom={5}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
        width={"100%"}
      >
        <Header
          title={`${service[0].toUpperCase()}${service.slice(1)}`}
          subTitle={`${service[0].toUpperCase()}${service.slice(1)} Service`}
          slug="Reliable and fast service to meet your needs with efficiency and professionalism."
        />
      </Box>

      <Box
        marginTop={"35px"}
        color="#000"
        width={"100%"}
        backgroundColor="#f2f2ff"
        padding="55px 80px"
        sx={{
          "@media(max-width:1500px)": {
            padding: "025px 80px",
          },
          "@media(max-width:1300px)": {
            padding: "025px 70px",
          },
          "@media(max-width:1100px)": {
            padding: "025px 50px",
          },
          "@media(max-width:900px)": {
            padding: "015px 30px",
          },
          "@media(max-width:700px)": {
            padding: "005px 20px",
          },
          "@media(max-width:500px)": {
            padding: "2px 10px",
          },
        }}
      >
        <Box
          marginTop={"50px"}
          display="flex"
          justifyContent={"space-around"}
          alignItems={"center"}
          gap={"15px"}
          flexWrap={"wrap"}
        >
          {newData.map((item, i) => {
            return (
              <CardItem
                key={i}
                link={`/${service}/${item.id}`}
                title={item.title}
                desc={item.desc}
                img={item.img}
                price={item.price}
              />
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default PageServices;
