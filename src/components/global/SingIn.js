import React, { useState } from "react";

import {
  Box,
  TextField,
  Typography,
  Button,
  Modal,
  CircularProgress,
} from "@mui/material";

import Background from "../../img/background.png";

const Singin = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const [login, setlogin] = useState(false);
  const [ok, setOk] = useState(false);
  const [userExist, setUserExiste] = useState(false);
  const [openOtp, setOpenOtp] = useState(false);
  const [codeOTP, setCodeOTP] = useState("");
  const [serverOTP, setServerOTP] = useState("");
  const [loading, setLoading] = useState(false);

  const getUser = async (email) => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_USERS}?d=${email}`
    );
    const { content } = await response.json();
    return content;
  };

  const handleSubmitRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !password || !email || !number) {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 3000);
    } else {
      getUser(email).then(async (content) => {
        if (content.length !== 0) {
          setUserExiste(true);
          setTimeout(() => {
            setUserExiste(false);
          }, 3000);
          return;
        } else {
          setLoading(false);
          setOpenOtp(true);
          try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/otp`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ email }),
            });
            const { otp } = await res.json();

            setServerOTP(otp);
          } catch (error) {
            console.log(error);
          }
        }
      });
    }
  };

  const handlOtp = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (codeOTP === serverOTP) {
      try {
        const form = document.getElementById("form-register");
        const formData = new FormData(form);

        await fetch(`${process.env.REACT_APP_ADD_USER}`, {
          method: "POST",
          body: formData,
        });

        setOk(true);
        setOpenOtp(false);
        setTimeout(() => {
          setOk(false);
          window.location.pathname = "/user";
          setlogin(true);
        }, 3000);
      } catch (error) {
        console.log(error);
      }
    } else {
      setLoading(false);
      setError(true);
      setTimeout(() => {
        setOpenOtp(false);

        setError(false);
      }, 3000);
    }
  };
  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    getUser(email).then((content) => {
      const user = content[0];
      if (user && user.password === password) {
        localStorage.setItem("token", new Date().getTime());
        localStorage.setItem("id", user.id);

        setOk(true);
        setTimeout(() => {
          setOk(false);
          localStorage.setItem("FullName", user.name);
          const newData = user.name.split(" ");

          const userName = `${newData[0].slice(0, 1).toUpperCase()}.${newData[1]
            .slice(0, 1)
            .toUpperCase()}${newData[1].slice(1)}`;
          localStorage.setItem("user", userName);
          setLoading(false);
          window.location.pathname = "/dashboard";
        }, 3000);
      } else {
        setLoading(false);
        setLoginError(true);
        setTimeout(() => {
          setLoginError(false);
        }, 3000);
      }
    });
  };

  if (login) {
    return (
      <Box
        overflow={"hidden"}
        width={"100%"}
        sx={{
          overflowY: "auto",
          backgroundImage: `url(${Background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <Modal open={openOtp}>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "60%",
              bgcolor: "background.paper",

              boxShadow: 24,
              p: 4,
              borderRadius: "4px",
            }}
          >
            <Typography
              sx={{
                fontSize: "25px",
                textAlign: "center",
                fontWeight: "bold",
                marginBottom: "25px",
                lineHeight: "50px",
              }}
            >
              Please check your email by entering the verification code.{" "}
            </Typography>
            <TextField
              label="Code"
              type={"text"}
              onChange={(e) => setCodeOTP(e.target.value)}
              placeholder="Enter code send to you're email to verify"
              sx={{
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
                width: "100%",
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
            />
            <Button
              onClick={handlOtp}
              type="submit"
              variant="contained"
              sx={{
                marginTop: "25px",
                fontWeight: "600",
                fontSize: "15px",
                padding: "12px 12px",
                color: "#fff",
                background: "blue",
              }}
            >
              {loading ? (
                <CircularProgress size={30} sx={{ color: "white" }} />
              ) : (
                "Verify"
              )}
            </Button>
          </Box>
        </Modal>{" "}
        <Box
          width="100%"
          height={"100vh"}
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            "@media(max-width: 600px)": {
              height: "auto",
              padding: "15px 25px",
            },
          }}
        >
          <Box
            className="box"
            width="570px"
            display="flex"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            backgroundColor={"#fff"}
            p={7}
            borderRadius={3}
            boxShadow={
              "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
            }
            sx={{
              "@media(max-width: 600px)": {
                width: "350px",
                padding: "6px",
              },
            }}
          >
            <Box
              width={600}
              textAlign="center"
              mb={5}
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
            >
              <Typography
                variant="h2"
                sx={{
                  fontSize: "32px",
                  fontWeight: "700",
                  marginBottom: "12px",
                }}
              >
                Sing Up
              </Typography>

              <Typography
                variant="h5"
                sx={{
                  fontSize: "15px",
                  fontWeight: "300",
                  "@media(max-width: 600px)": {
                    width: "250px",
                  },
                }}
              >
                Fill in the fields below to register.{" "}
              </Typography>
            </Box>
            <Box width={"100%"}>
              <form
                onSubmit={handleSubmitRegister}
                style={{
                  marginBottom: "12px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "32px",
                  width: "100%",
                }}
              >
                <TextField
                  label="Full Name"
                  type="text"
                  sx={{
                    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    width: "100%",
                    "@media(max-width: 600px)": {
                      marginBottom: "25px",
                    },
                  }}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  label="Email"
                  type="email"
                  sx={{
                    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    width: "100%",
                    "@media(max-width: 600px)": {
                      marginBottom: "25px",
                    },
                  }}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  label="Phone Number"
                  type="text"
                  sx={{
                    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    width: "100%",
                    "@media(max-width: 600px)": {
                      marginBottom: "25px",
                    },
                  }}
                  onChange={(e) => setNumber(e.target.value)}
                />
                <TextField
                  label="Password"
                  type={"password"}
                  sx={{
                    ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                    width: "100%",
                    "@media(max-width: 600px)": {
                      marginBottom: "25px",
                    },
                  }}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    fontWeight: "600",
                    fontSize: "15px",
                    padding: "12px 12px",
                    color: "#fff",
                    background: "blue",
                  }}
                >
                  {loading ? (
                    <CircularProgress size={30} sx={{ color: "white" }} />
                  ) : (
                    "Sing Up"
                  )}
                </Button>

                <Typography
                  onClick={() => setlogin(false)}
                  variant="h6"
                  sx={{
                    fontWeight: "bold",
                    cursor: "pointer",
                    width: "100%",
                    textAlign: "center",
                  }}
                >
                  Login
                </Typography>
              </form>
              {error && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  Please verify your information!
                </span>
              )}
              {ok && (
                <span style={{ color: "green", fontSize: "14px" }}>
                  You have been successfully logged in!
                </span>
              )}
              {userExist && (
                <span style={{ color: "red", fontSize: "14px" }}>
                  There is an account with this email
                </span>
              )}
            </Box>
          </Box>
        </Box>
        <Box height={0} overflow="hidden">
          <form id="form-register">
            <input
              type="text"
              value={`${new Date().getTime()}-${email}`}
              name="id"
            />
            <input type="text" value={name} name="name" />
            <input type="text" value={number} name="number" />
            <input type="text" value={password} name="password" />
            <input type="text" value={email} name="email" />
          </form>
        </Box>
      </Box>
    );
  }
  return (
    <Box
      overflow={"hidden"}
      width={"100%"}
      sx={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
      height={"100vh"}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        className="box"
        width="570px"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        backgroundColor={"#fff"}
        p={7}
        borderRadius={3}
        boxShadow={
          "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
        }
        sx={{
          "@media(max-width:600px)": {
            width: "350px !important",
            gap: "25px",
            padding: "56px 12px",
          },
        }}
      >
        <Box
          width={600}
          textAlign="center"
          mb={5}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Typography
            variant="h2"
            sx={{ fontSize: "32px", fontWeight: "700", marginBottom: "12px" }}
          >
            Login
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontSize: "15px",
              fontWeight: "300",
              "@media(max-width: 600px)": {
                width: "250px",
              },
            }}
          >
            Fill in the fields below to log in.{" "}
          </Typography>
        </Box>
        <Box width={"100%"}>
          <form
            onSubmit={handleSubmitLogin}
            style={{
              marginBottom: "12px",
              display: "flex",
              flexDirection: "column",
              gap: "32px",
              width: "100%",
            }}
          >
            <TextField
              label="Email"
              type="email"
              sx={{
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
                width: "100%",
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <TextField
              label="Password"
              type={"password"}
              sx={{
                ".css-9ddj71-MuiInputBase-root-MuiOutlinedInput-root": {
                  borderRadius: "12px",
                },
                width: "100%",
                "@media(max-width: 600px)": {
                  marginBottom: "25px",
                },
              }}
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <Button
              type="submit"
              variant="contained"
              sx={{
                fontWeight: "600",
                fontSize: "15px",
                padding: "12px 12px",
                color: "#fff",
                background: "blue",
              }}
            >
              {loading ? (
                <CircularProgress size={30} sx={{ color: "white" }} />
              ) : (
                "Login"
              )}
            </Button>
            <Typography
              onClick={() => setlogin(true)}
              variant="h6"
              sx={{
                fontWeight: "bold",
                cursor: "pointer",
                width: "100%",
                textAlign: "center",
              }}
            >
              Sing Up
            </Typography>
          </form>
          {error && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Please verify your information !
            </span>
          )}
          {loginError && (
            <span style={{ color: "red", fontSize: "14px" }}>
              Invalid username/email or password!
            </span>
          )}
          {ok && (
            <span style={{ color: "green", fontSize: "14px" }}>
              You have been successfully logged in!
            </span>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export default Singin;
