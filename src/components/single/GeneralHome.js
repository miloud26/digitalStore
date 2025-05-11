import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import imageHero from "../../img/hero.png";
import Platforms from "../../img/platforms.png";
import Digital01 from "../../img/INO02.png";
import Digital02 from "../../img/INO03.png";
import Digital03 from "../../img/INO04.png";
import Payment01 from "../../img/payment01.jpg";
import Payment02 from "../../img/payment02.png";
import Payment03 from "../../img/payment03.png";
import adve01 from "../../img/adve001.png";
import adve02 from "../../img/adve002.png";
import adve03 from "../../img/adve003.png";
const GeneralHome = () => {
  return (
    <Box width="100%">
      <Box width="100%" margin="0px 0px 5px">
        <Box
          width={"100%"}
          backgroundColor="#0e062a"
          padding="025px 150px"
          color="white"
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
            marginBottom={"50px"}
            borderBottom={"2px white solid"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            padding={"25px"}
          >
            <Link to="/user">
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    background: "#f2f2ff",
                  },
                  background: "#0dffd8",
                  color: "#000",
                  marginRight: "12px",
                }}
              >
                Sing In
              </Button>
            </Link>
            <Link to="/user">
              <Button
                variant="contained"
                sx={{
                  "&:hover": {
                    background: "#f2f2ff",
                  },
                  background: "#0dffd8",
                  color: "#000",
                  marginLeft: "12px",
                }}
              >
                Sing Up
              </Button>
            </Link>
          </Box>
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
                Power Your Brand with Premium Ad Accounts & Digital Solutions
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
                We are a digital advertising agency offering ad account sales,
                promotional videos, and a range of high-quality digital
                products.
              </Typography>
              <Box>
                {" "}
                <Link to="/user">
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
                    Sing Up
                  </Button>
                </Link>
              </Box>
            </Box>
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
              <img src={imageHero} alt="text" />
            </Box>
          </Box>
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
              <img src={Platforms} alt="text" />
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
                Grow with Ad Accounts & Digital Services Digital Products{" "}
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
                We provide social media services, high-quality ad accounts,
                promotional videos, and digital products to help you grow your
                online presence and boost engagement.
              </Typography>
              <Box>
                {" "}
                <Link to="/user">
                  <Button
                    variant="contained"
                    sx={{
                      background: "#0dffd8",
                      color: "#000",
                      marginLeft: "12px",
                      marginTop: "25px",
                    }}
                  >
                    Sing Up
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          marginTop={"55px"}
          color="#000"
          width={"100%"}
          backgroundColor="#fff"
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
            marginTop={"55px"}
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
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "70px",
                textAlign: "center",
                width: "100%",
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
                Your One-Stop Shop for Social Media Growth & Digital Services{" "}
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
                We offer everything you need to grow online — from verified ad
                accounts and engaging social media content to promotional videos
                and digital products. Our services are designed to help brands,
                influencers, and businesses boost visibility and drive results.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"100%"}
            marginTop={"50px"}
            display="flex"
            justifyContent={"space-around"}
            alignItems={"center"}
            sx={{
              "@media(max-width:1200px)": {
                flexWrap: "wrap",
                gap: "15px",
              },
            }}
          >
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },
                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={Digital01} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Verified Ad Accounts{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  Get instant access to trusted ad accounts ready for immediate
                  campaign launches.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },

                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={Digital02} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Social Media Content{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  Boost engagement with tailored visuals, captions, and posts
                  for every platform.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },
                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={Digital03} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Digital Products{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  Explore ready-made digital tools and assets to grow and
                  monetize your brand.
                </Typography>
              </Box>
            </Box>
          </Box>
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
            marginTop={"55px"}
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
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "70px",
                textAlign: "center",
                width: "100%",
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
                Flexible, Secure, and Global Payment Solutions for Your
                Convenience{" "}
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
                We provide local, global, and alternative payment methods to
                ensure smooth and secure transactions. With advanced security,
                you can trust that your payments are processed quickly and
                safely.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"100%"}
            marginTop={"50px"}
            display="flex"
            justifyContent={"space-around"}
            alignItems={"center"}
            sx={{
              "@media(max-width:1200px)": {
                flexWrap: "wrap",
                gap: "15px",
              },
            }}
          >
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },
                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={Payment01} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Wide Range of Payment Methods{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  We accept local payment options, global gateways, and
                  alternative methods, making it easy for you to complete
                  transactions.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },

                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={Payment02} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Secure & Trusted Payments{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  Your transactions are protected with advanced security
                  protocols, ensuring a smooth and safe payment experience.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },
                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={Payment03} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Flexible Payment Options{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  From local solutions to international systems, we offer
                  flexible payment methods tailored to your preferences and
                  needs.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          marginTop={"55px"}
          color="#000"
          width={"100%"}
          backgroundColor="#fff"
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
            marginTop={"55px"}
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
              width="100%"
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "column",
                marginBottom: "70px",
                textAlign: "center",
                width: "100%",
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
                Leading the Market with Innovation and Reliability{" "}
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
                We offer flexible, secure, and comprehensive services that cater
                to the evolving digital landscape. Our commitment to excellence
                has made us a trusted partner for businesses and creators
                worldwide.
              </Typography>
            </Box>
          </Box>
          <Box
            width={"100%"}
            marginTop={"50px"}
            display="flex"
            justifyContent={"space-around"}
            alignItems={"center"}
            sx={{
              "@media(max-width:1200px)": {
                flexWrap: "wrap",
                gap: "15px",
              },
            }}
          >
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },
                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={adve01} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Market Leader in Digital Solutions{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  We stand out by offering comprehensive services that blend
                  local expertise with global reach, catering to the evolving
                  needs of today’s digital world.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },

                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={adve02} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Unmatched Flexibility and Innovation{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  Our ability to adapt to different payment methods and tailor
                  services to client needs ensures we remain ahead of the
                  competition in providing innovative solutions.
                </Typography>
              </Box>
            </Box>
            <Box
              width={"30%"}
              padding={"10px"}
              borderRadius={"8px"}
              backgroundColor="#f2f2ff"
              sx={{
                "@media(max-width:1200px)": {
                  width: "45%",
                },
                "@media(max-width:900px)": {
                  width: "100%",
                },
              }}
            >
              <img src={adve03} alt={"text"} />
              <Box
                width="100%"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexDirection: "column",
                  marginBottom: "70px",
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
                    "@media(max-width:900px)": {
                      fontSize: "15px",
                    },
                    "@media(max-width:700px)": {
                      fontSize: "13",
                    },
                  }}
                >
                  Trusted by Clients Worldwide{" "}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "17px",

                    "@media(max-width:1500px)": {
                      fontSize: "15",
                    },
                    "@media(max-width:1400px)": {
                      fontSize: "13px",
                    },
                    "@media(max-width:1100px)": {
                      fontSize: "11px",
                    },

                    "@media(max-width:700px)": {
                      fontSize: "9px",
                    },
                  }}
                >
                  With a track record of delivering results, we have earned the
                  trust of clients across various industries, solidifying our
                  position as a reliable partner in the market.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          marginTop={"55px"}
          color="#000"
          width={"100%"}
          backgroundColor="#0e062a"
          padding="25px"
          textAlign={"center"}
        >
          <Typography
            sx={{
              color: "white",
            }}
          >
            © 2025 Digital DZ. All rights reserved
          </Typography>

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
                }}
              >
                Return Policy
              </Button>
            </Link>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default GeneralHome;
