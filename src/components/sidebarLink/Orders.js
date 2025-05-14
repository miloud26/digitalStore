import React, { useEffect, useState } from "react";

import { Avatar, Box, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import moment from "moment";
const Orders = () => {
  const [orders, setOrders] = useState([]);

  const getAllOrders = async () => {
    const response = await fetch(
      `${process.env.REACT_APP_GET_ORDERS}?d=${localStorage.getItem("id")}`
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

  useEffect(() => {
    getAllOrders();
  }, []);

  const columns = [
    {
      field: "image",
      headerName: "Image",
      headerAlign: "center",
      renderCell: (params) => (
        <Box width="100%" display="flex" justifyContent="center">
          <Avatar
            src={params.row.img}
            sx={{ border: "1px solid #F2F5F9", width: "60px", height: "60px" }}
          />
        </Box>
      ),
      sortable: false,
      filterable: false,
      width: 150,
    },

    {
      field: "title",
      headerAlign: "center",
      headerName: "Title",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.title}
        </Typography>
      ),
      width: 400,
    },
    {
      field: "quantity",
      headerAlign: "center",
      headerName: "Quantity",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.quantity}
        </Typography>
      ),
      width: 350,
    },

    {
      field: "total",
      headerAlign: "center",
      headerName: "Total",
      renderCell: (params) => (
        <Typography
          sx={{
            fontWeight: "bold",
            fontSize: "18px",
            width: "100%",
            textAlign: "center",
          }}
        >
          {params.row.total}
        </Typography>
      ),
      width: 350,
    },

    {
      field: "date",
      headerAlign: "center",
      headerName: "Date",
      renderCell: (params) => {
        return (
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "18px",
              width: "100%",
              textAlign: `center`,
            }}
          >
            {moment(params.row.createAt).format("DD-MM-YYYY - HH:MM")}
          </Typography>
        );
      },

      width: 350,
    },
  ];
  return (
    <Box id={"jh"}>
      <Box
        overflow={"hidden"}
        sx={{ overflowX: "auto" }}
        padding={"50px 5px 80px"}
      >
        <Box
          padding={3}
          backgroundColor={"white"}
          borderRadius={2}
          marginBottom={5}
          sx={{
            "@media(max-width:600px)": { padding: "6px" },
          }}
          boxShadow={
            "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px"
          }
          width={"100%"}
          justifyContent="center"
          alignItems={"center"}
        >
          <DataGrid
            rows={orders}
            columns={columns}
            pagination
            rowHeight={85}
            sx={{
              height: "690px",
              padding: "22px",
              paddingBottom: "0",
              backgroundColor: ``,

              boxShadow:
                "rgb(159 162 191 / 18%) 0px 9px 16px, rgb(159 162 191 / 32%) 0px 2px 2px",
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Orders;
