import { sendNotification } from "./telegranBot.js";

export const makePyment = async (title, price, img, quantity, service) => {
  try {
    const res = await fetch(`${process.env.REACT_APP_CHARGILY_PRODUCT}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CHARGILY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: `{"name":"${title}"}`,
    });
    const data = await res.json();
    const productID = data.id;
    try {
      const res = await fetch(`${process.env.REACT_APP_CHARGILY_PRICE}`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${process.env.REACT_APP_CHARGILY_TOKEN}`,
          "Content-Type": "application/json",
        },
        body: `{"amount":${
          price * 250
        },"currency":"dzd","product_id":"${productID}"}`,
      });
      const data = await res.json();
      const priceID = data.id;
      try {
        const res = await fetch(`${process.env.REACT_APP_CHARGILY_CHECKOUT}`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.REACT_APP_CHARGILY_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: [
              {
                price: priceID,
                quantity: quantity,
              },
            ],
            success_url: `${process.env.REACT_APP_DIGITALDZ}/orders`,
          }),
        });
        const data = await res.json();
        const paymentUrl = data.checkout_url;
        window.open(`${paymentUrl}`);

        let intervalId = null; // عرّف المتغير هنا

        intervalId = setInterval(async () => {
          try {
            const res = await fetch(`${process.env.REACT_APP_SERVER}/status`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
            });

            const data = await res.json();
            const index = data.status;

            if (index === "paid") {
              clearInterval(intervalId);

              const newOrder = {
                msg: `*New Order Received!* ${price * 250 * quantity}`,
              };
              sendNotification(newOrder);

              ////////////////////////////////
              try {
                const res = await fetch(
                  `${process.env.REACT_APP_GET_ORDER}?qty=${quantity}&service=${service}`,
                  {
                    method: "GET",
                  }
                );
                const { content } = await res.json();
                try {
                  const email = localStorage.getItem("id").split("-")[1];

                  await fetch(`${process.env.REACT_APP_SERVER}/sendOrder`, {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                      user: localStorage.getItem("user"),
                      email,
                      title: title,
                      content,
                    }),
                  });
                } catch (error) {
                  console.log(error);
                }
              } catch (error) {
                console.log(error);
              }

              /////////////////////////////////////
              try {
                const formData = new FormData();
                formData.append("date", new Date().getTime());
                formData.append("id", localStorage.getItem("id"));
                formData.append("title", title);
                formData.append("quantity", quantity);
                formData.append("total", price * 250 * quantity);
                formData.append(
                  "img",
                  `${process.env.REACT_APP_DIGITALDZ}${img}`
                );

                await fetch(`${process.env.REACT_APP_GET_ORDER2SHEET}`, {
                  method: "POST",
                  body: formData,
                });
              } catch (error) {
                console.log(error);
              }
            } else if (index === "failed") {
              clearInterval(intervalId);
              window.location.pathname = `${process.env.REACT_APP_DIGITALDZ}/dashboard`;
            }
          } catch (error) {
            console.log(error);
          }
        }, 5000);
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      console.log(error);
    }
  } catch (error) {
    console.log(error);
  }
};
