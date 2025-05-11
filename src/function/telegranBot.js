export const sendNotification = async (newOrder) => {
  const url = `${process.env.REACT_APP_TELAGRAM_BOT}`;

  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        chat_id: 5591540987,
        text: `
<b>${newOrder.msg} DZD</b>

`,
        parse_mode: "HTML",
      }),
    });

    if (response.ok) {
      return;
    } else {
      console.error("Failed to send notification:", response.statusText);
    }
  } catch (error) {
    console.error("Error sending notification:", error);
  }
};
