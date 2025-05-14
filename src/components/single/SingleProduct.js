import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Header from "../global/Header";
import { Link, useParams } from "react-router-dom";
import { data } from "../../data";
import { makePyment } from "../../function/makePayment.js";
import Error from "./Error.js";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const { service, id: serviceTitle } = useParams();
  const [loading, setLoading] = useState(false);

  const Allservices = data.map((item) => item[0].service);
  const AllserviceID = data
    .map((item) => item.slice(1).map((item) => item.id))
    .flat();

  let item;
  if (Allservices.includes(service) && AllserviceID.includes(serviceTitle)) {
    item = data
      .filter((item) => item[0].service === service)[0]
      .slice(1)
      .filter((item) => item.id === serviceTitle)[0];
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
          padding: "60px 6px 140px",
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
          subTitle={serviceTitle}
          slug="Reliable and fast service to meet your needs with efficiency and professionalism."
        />
      </Box>

      <Box
        marginTop={"55px"}
        color="#000"
        width={"100%"}
        backgroundColor="#f2f2ff"
        padding="55px 150px"
        sx={{
          "@media(max-width:1500px)": {
            padding: "025px 100px",
          },
          "@media(max-width:1300px)": {
            padding: "025px 80px",
          },
          "@media(max-width:1100px)": {
            padding: "025px 65px",
          },
          "@media(max-width:900px)": {
            padding: "015px 55px",
          },
          "@media(max-width:700px)": {
            padding: "005px 30px",
          },
          "@media(max-width:500px)": {
            padding: "2px 10px",
          },
        }}
      >
        <Box
          width={"100%"}
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          sx={{
            "@media(max-width:1200px)": {
              flexWrap: "wrap",
              gap: "50px",
            },
          }}
        >
          <Box
            width="40%"
            sx={{
              "@media(max-width:1300px)": {
                width: "35%",
              },
              "@media(max-width:900px)": {
                width: "100%",
              },
            }}
          >
            <img src={item?.img} alt="hv" />
          </Box>
          <Box
            width="45%"
            sx={{
              "@media(max-width:1200px)": {
                width: "45%",
              },
              "@media(max-width:900px)": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "70px",
                textAlign: "center",
                width: "100%",
              },
            }}
          >
            <Typography
              sx={{
                fontWeight: "bold",
                fontSize: "45px",
                marginBottom: "25px",
                "@media(max-width:1500px)": {
                  fontSize: "42px",
                },
                "@media(max-width:1400px)": {
                  fontSize: "32px",
                },
                "@media(max-width:1100px)": {
                  fontSize: "26px",
                },
                "@media(max-width:900px)": {
                  fontSize: "25px",
                },
                "@media(max-width:700px)": {
                  fontSize: "20px",
                },
              }}
            >
              {item?.title}{" "}
            </Typography>
            <Typography
              sx={{
                fontSize: "25px",
                marginBottom: "5px",
                "@media(max-width:1500px)": {
                  fontSize: "22px",
                },
                "@media(max-width:1400px)": {
                  fontSize: "18px",
                },
                "@media(max-width:1100px)": {
                  fontSize: "15px",
                },

                "@media(max-width:700px)": {
                  fontSize: "13px",
                },
              }}
            >
              {item?.desc}
            </Typography>

            {service === "services" ? (
              <></>
            ) : (
              <>
                <Box>
                  <Button
                    variant="contained"
                    sx={{
                      "@media(max-width:700px)": {
                        marginBottom: "25px",
                      },
                      "&:hover": {
                        background: "#0dffd8",
                      },
                      background: "#0dffd8",
                      color: "#000",

                      marginTop: "25px",
                      boxShadow:
                        " 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0",
                    }}
                  >
                    {+item?.price} $
                  </Button>
                  <Button
                    variant="contained"
                    sx={{
                      "@media(max-width:700px)": {
                        marginBottom: "25px",
                      },
                      "&:hover": {
                        background: "#0dffd8",
                      },

                      background: "#0dffd8",
                      color: "#000",
                      marginLeft: "12px",
                      marginTop: "25px",
                    }}
                  >
                    {item?.price * 250} DZD
                  </Button>
                </Box>
                <Box>
                  {service === "courses" ? (
                    <></>
                  ) : (
                    <>
                      {" "}
                      <TextField
                        type="number"
                        value={quantity}
                        sx={{
                          ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root":
                            {
                              borderRadius: "12px",
                              marginTop: "25px",
                            },
                          width: "50%",
                          "@media(max-width: 600px)": {
                            marginBottom: "25px",
                          },
                        }}
                        onChange={(e) => setQuantity(e.target.value)}
                      />
                      <Box
                        display={"flex"}
                        justifyContent={"start"}
                        alignItems={"center"}
                      >
                        <span
                          style={{
                            fontSize: "19px",
                            fontWeight: "bold",
                            marginTop: "25px",
                          }}
                        >
                          Total :{" "}
                        </span>
                        <Button
                          variant="contained"
                          sx={{
                            display: "block",
                            "&:hover": {
                              background: "#0dffd8",
                            },
                            background: "#0dffd8",
                            color: "#000",
                            marginLeft: "12px",
                            marginTop: "25px",
                            boxShadow:
                              " 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0",
                          }}
                        >
                          {item?.price * quantity} $
                        </Button>
                        <Button
                          variant="contained"
                          sx={{
                            display: "block",
                            "&:hover": {
                              background: "#0dffd8",
                            },

                            background: "#0dffd8",
                            color: "#000",
                            marginLeft: "12px",
                            marginTop: "25px",
                          }}
                        >
                          {item?.price * 250 * quantity} DZD
                        </Button>
                      </Box>
                    </>
                  )}
                </Box>

                <Box>
                  <Button onClick={() => setLoading(true)}>
                    {loading ? (
                      <Button
                        disabled={true}
                        variant="contained"
                        sx={{
                          "&:hover": {
                            background: "#f2f2ff",
                          },
                          background: "#0dffd8",
                          color: "#000",

                          marginTop: "25px",
                        }}
                      >
                        cib / Dahabia
                      </Button>
                    ) : (
                      <Button
                        onClick={() =>
                          makePyment(
                            item.title,
                            item.price,
                            item.img,
                            quantity,
                            serviceTitle
                          )
                        }
                        variant="contained"
                        sx={{
                          "&:hover": {
                            background: "#f2f2ff",
                          },
                          background: "#0dffd8",
                          color: "#000",

                          marginTop: "25px",
                        }}
                      >
                        cib / Dahabia
                      </Button>
                    )}
                  </Button>
                  <Button
                    disabled={true}
                    variant="contained"
                    sx={{
                      background: "#0dffd8",
                      color: "#000",
                      marginLeft: "12px",
                      marginTop: "25px",
                    }}
                  >
                    payment card
                  </Button>
                </Box>
              </>
            )}
          </Box>
        </Box>
      </Box>

      {service === "services" ? (
        <Box
          width={"100%"}
          padding={"25px"}
          backgroundColor="red"
          borderRadius={"15px"}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
        >
          <Typography
            sx={{
              fontSize: "22px",
              fontWeight: "bold",
              color: "white",
              textAlign: "center",
            }}
          >
            Befort doing anything , please contact us via Telegram. @Digital_dz
          </Typography>
        </Box>
      ) : (
        ""
      )}

      <Box
        marginTop={"25px"}
        width={"100%"}
        padding={"25px"}
        backgroundColor="#fff"
        borderRadius={"15px"}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
      >
        <Typography
          sx={{
            marginTop: "22px",
            fontSize: "22px",
            fontWeight: "bold",
            "@media(max-width:700px)": {
              marginTop: "0px",
              fontSize: "20px",
            },
          }}
        >
          For more information
        </Typography>
        <Typography
          sx={{
            marginTop: "22px",
            fontSize: "18px",
            "@media(max-width:700px)": {
              fontSize: "17px",
            },
          }}
        >
          Seller : Digital DZ
        </Typography>
        <Typography
          sx={{
            marginTop: "22px",
            fontSize: "18px",
            "@media(max-width:700px)": {
              fontSize: "17px",
            },
          }}
        >
          Telegram : @Digital_dz
        </Typography>
      </Box>
      <Box
        marginTop={"55px"}
        color="#000"
        width={"100%"}
        backgroundColor="#0e062a"
        padding="25px"
        textAlign={"center"}
        borderRadius={"8px"}
      >
        <Box marginTop={"25px"}>
          <Link target="_blank" to="/privacy">
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  background: "#f2f2ff",
                },
                background: "#0dffd8",
                color: "#000",
                marginRight: "12px",
                "@media(max-width:700px)": {
                  marginBottom: "10px",
                },
              }}
            >
              Privacy Policy
            </Button>
          </Link>
          <Link target="_blank" to="/return">
            <Button
              variant="contained"
              sx={{
                "&:hover": {
                  background: "#f2f2ff",
                },
                background: "#0dffd8",
                color: "#000",
                marginRight: "12px",
                "@media(max-width:700px)": {
                  marginBottom: "10px",
                },
              }}
            >
              Return Policy
            </Button>
          </Link>
        </Box>
      </Box>
    </Box>
  );
};

export default SingleProduct;
