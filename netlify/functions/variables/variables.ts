import { Handler, HandlerContext, HandlerEvent } from "@netlify/functions";

const handler: Handler = async (
  event: HandlerEvent,
  context: HandlerContext
) => {
  const myImportantVariable = process.env.MY_IMPORTANT_VARIABLE;

  if (!myImportantVariable) {
    throw "Missin MY_IMPORTANT_VARIABLE";
  }

  console.log(`Variables dice: Hola desde logs`);

  return {
    statusCode: 200,
    body: JSON.stringify({
      myImportantVariable,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export { handler };
