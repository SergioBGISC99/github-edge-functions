import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  
  await notify('Hola mundo desde Netlify en Discord');
  
    return {
    statusCode: 200,
    body: JSON.stringify({
      message: "done",
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const notify = async (message: string) => {
  const body = {
    content: message,
    embeds: [
      {
        image: {
          url: "https://media.giphy.com/media/3fBVaRM2c79TtXbyi6/giphy.gif",
        },
      },
    ],
  };

  const response = await fetch(process.env.DISCORD_WEBHOOK_URL ?? "", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    console.log("Error sending message to Discord");
    return false;
  }

  return true;
};

export { handler };
