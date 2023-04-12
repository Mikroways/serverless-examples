module.exports.hello = (event, context) => {
  const eventRecords = event.Records
  const result = { 
    bucketName: eventRecords[0].s3.bucket.name,
    filename: eventRecords[0].s3.object.key,
    eventTime: eventRecords[0].eventTime,
    region: eventRecords[0].awsRegion
  };

  console.log(JSON.stringify(result, null, 2))
};
