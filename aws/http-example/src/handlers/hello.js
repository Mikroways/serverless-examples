module.exports.sayHello = async function (event, context, callback) {
  //console.log(JSON.stringify(event, null, 2))
  const name = event.queryStringParameters?.name;
  if (name) {
    callback(null, {
      statusCode: 200,
      body: `Hello ${name}!`,
    });
  } else {
    callback(null, {
      statusCode: 400,
      body: "Please provide a name using the query string `name` e.g `?name=Mikroways`",
    });
  }
};
