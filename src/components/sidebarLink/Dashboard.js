import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import Welcome from "../../img/welcome.png";

import axios from "axios";
import { Cell, Pie, PieChart, Tooltip } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const [file, setFile] = useState(null);

  const [img, setImg] = useState("");

  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const response = await fetch(
      `https://script.google.com/macros/s/AKfycby1BqYKIfgxaDivAO7JhsQzvazGXaxJFIk-DO_CHz0kP7tvqjDM-W7_WA1Ofeib_jYt/exec?d=${localStorage.getItem(
        "id"
      )}`
    );
    const { content } = await response.json();
    const newContent = content.map((item) => {
      const obj = {};
      obj.id = item.date;
      obj.img = item.img;
      obj.title = item.title;
      obj.quantity = item.quantity;
      obj.total = item.total;
      obj.createAt = item.date;

      return obj;
    });
    setOrders(newContent);
  };

  const getImage = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_USER_IMAGE}?d=${localStorage.getItem("id")}`
    );
    const { content } = await response.json();

    setImg(content[content.length - 1]?.image);
  };

  useEffect(() => {
    getAllOrders();
    getImage();
  }, []);
  const productCount = {};

  orders.forEach((item) => {
    if (productCount[item.title]) {
      productCount[item.title] += item.quantity;
    } else {
      productCount[item.title] = item.quantity;
    }
  });
  const data = Array.from(new Set(orders.map((item) => item.title))).map(
    (item) => {
      return { name: item, value: productCount[item] };
    }
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "jbyouxuk");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_PORT_IMAGECLODINARY}`,
        formData
      );

      const sheetformData = new FormData();
      sheetformData.append("id", localStorage.getItem("id"));
      sheetformData.append("image", response.data.secure_url);
      setImg(response.data.secure_url);
      setTimeout(() => {
        try {
          fetch(`${process.env.REACT_APP_PORT_IMAGETOSHEET}`, {
            method: "POST",
            body: sheetformData,
          });

          setOpen(false);
        } catch (error) {
          console.log(error);
        }
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Box
      className="dashboard maxHeight"
      sx={{
        padding: "0px 80px 80px 120px",

        "@media(max-width:900px)": {
          padding: "2px 2px 120px 2px",
        },
      }}
    >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "500px",
            height: "auto",
            textAlign: "center",
            bgcolor: "background.paper",
            borderRadius: "15px",
            boxShadow: 24,
            p: 4,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <input
            type="file"
            style={{ marginBottom: "15px" }}
            onChange={(e) => setFile(e.target.files[0])}
          />

          <Button variant="contained" onClick={handleSubmit}>
            Submit
          </Button>
        </Box>
      </Modal>

      <Box marginLeft="20px">
        <Typography
          sx={{
            "@media(max-width:900px)": {
              display: "none",
            },
            fontSize: "33px",
            fontWeight: "bold",
          }}
          variant="h1"
        >
          Good Morning!
        </Typography>
      </Box>
      <Box
        padding={4}
        width="100%"
        borderRadius={4}
        display="flex"
        alignItems={"center"}
        gap={5}
        backgroundColor={"blue"}
        color={"white"}
        marginTop={5}
        marginBottom={"25px"}
        marginLeft="20px"
        sx={{
          "@media(max-width:900px)": {
            display: "none",
          },
        }}
      >
        <Box
          onClick={() => setOpen(true)}
          width="230px"
          sx={{
            cursor: "pointer",
            "@media(max-width:1300px)": {
              width: "260px",
            },
            "@media(max-width:1100px)": {
              width: "340px",
            },
          }}
        >
          <img
            src={img || Welcome}
            alt="profile"
            style={{ width: "100%", borderRadius: "12px", opacity: "0.9" }}
          />
        </Box>
        <Box>
          <Typography
            sx={{ fontSize: "32px", fontWeight: "bold", marginBottom: "10px" }}
          >
            Welcome{" "}
            <span style={{ color: `white`, fontSize: "34px" }}>
              {localStorage.getItem("user")}
            </span>
          </Typography>
          <Typography sx={{ fontSize: "18px" }}>
            Welcome to the Digital DZ platform for digital products! We look
            forward to supporting you in your e-commerce business and making
            your work exceptionally high-quality. Find the best tools and
            accounts to help you here.
          </Typography>
        </Box>
      </Box>

      <Box
        marginTop={"50px"}
        display="flex"
        justifyContent={"space-around"}
        alignItems={"center"}
        gap={"15px"}
        flexWrap={"wrap"}
      >
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
                }}
              >
                All Sales
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",

                  "@media(max-width:1500px)": {
                    fontSize: "15",
                  },
                }}
              >
                {orders.reduce((sum, item) => sum + item.total, 0)} DZD
              </Typography>
            </Box>
          </Box>
        </Box>
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
                }}
              >
                Weekly Sales
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",

                  "@media(max-width:1500px)": {
                    fontSize: "15",
                  },
                }}
              >
                {orders
                  .filter(
                    (item) =>
                      item.createAt >= Date.now() - 7 * 24 * 60 * 60 * 1000
                  )
                  .reduce((sum, item) => sum + item.total, 0)}{" "}
                DZD
              </Typography>
            </Box>
          </Box>
        </Box>
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
                }}
              >
                Daily Sales
              </Typography>
              <Typography
                sx={{
                  fontSize: "17px",

                  "@media(max-width:1500px)": {
                    fontSize: "15",
                  },
                }}
              >
                {orders
                  .filter(
                    (item) => item.createAt >= Date.now() - 24 * 60 * 60 * 1000
                  )
                  .reduce((sum, item) => sum + item.total, 0)}{" "}
                DZD
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        marginTop={"35px"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <PieChart width={350} height={350}>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={175}
            fill="#8884d8"
            label="hhhh"
          >
            {data.map((entry, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </Box>
    </Box>
  );
};

export default Dashboard;
