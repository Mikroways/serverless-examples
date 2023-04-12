module.exports.hello = (event, context) => {
  const dateStr = new Date().toDateString();
  const data = {
    message: `Hello, it's ${dateStr}`,
    input: event
  };
  console.log(JSON.stringify(data,null,2));
};
