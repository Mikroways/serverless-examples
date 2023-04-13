module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello Word!",
      //input: event,
      node_env: process.env.NODE_ENV,
      stage: process.env.STAGE,
    }),
  };
  callback(null, response);
};
