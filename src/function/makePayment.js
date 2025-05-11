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

    const res1 = await fetch(`${process.env.REACT_APP_CHARGILY_PRICE}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CHARGILY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: `{"amount":${price * 250},"currency":"dzd","product_id":"${
        data.id
      }"}`,
    });
    const data1 = await res1.json();

    const res2 = await fetch(`${process.env.REACT_APP_CHARGILY_CHECKOUT}`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.REACT_APP_CHARGILY_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        items: [
          {
            price: data1.id,
            quantity: quantity,
          },
        ],
        success_url: `${process.env.REACT_APP_DIGITALDZ}/orders`,
      }),
    });
    const data2 = await res2.json();

    window.open(`${data2.checkout_url}`);
    await fetch(`${process.env.REACT_APP_SERVER}/resetserver`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: ``,
    });
  } catch (error) {
    console.log(error);
  }
  let intervalId = null;
  intervalId = setInterval(async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/status`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.json();
      console.log(data);
      const index = data.status;
      console.log(index);

      if (index === "paid") {
        clearInterval(intervalId);

        const newOrder = {
          msg: `*New Order Received!* ${price * 250 * quantity}`,
        };
        sendNotification(newOrder);

        try {
          const res = await fetch(
            `${process.env.REACT_APP_GET_ORDER}?qty=${quantity}&service=${service}`,
            {
              method: "GET",
            }
          );
          const { content } = await res.json();

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
        // add to sheet
        try {
          const formData = new FormData();
          formData.append("date", new Date().getTime());
          formData.append("id", localStorage.getItem("id"));
          formData.append("title", title);
          formData.append("quantity", quantity);
          formData.append("total", price * quantity * 250);
          formData.append("img", img);

          await fetch(
            `https://script.google.com/macros/s/AKfycbzGSxcnOGMCnenpppp8IH6SEI71Vyb1sGdLrKLn9D4eCpwIJYNGPrv7-cKjUpkLHA4rRw/exec`,
            {
              method: "POST",
              body: formData, // لا تضيف Content-Type هنا!
            }
          );
        } catch (error) {
          console.log(error);
        }
      } else if (index === "start") {
        return;
      } else {
        clearInterval(intervalId);
        window.location.pathname = `/dashboard`;
      }
    } catch (error) {
      console.log(error);
    }
  }, 5000);
};
