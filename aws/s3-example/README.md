# S3 file upload

In this example we trigger a Lambda function by uploading a file to a S3 Bucket

## Usage

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/aws/s3-example -n my-project
```

## Deployment

First, you need to configure your AWS credentials; there are different ways to do so explained on the [official documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html). After that, run:
```
npm run sls:deploy -- --stage <stage>
```
## Local development

This project uses the [.env.local](.env.local) file to configure the local environment. To start the local server run:
```
npm run sls:offline
```

### Triggering AWS Events offline

The [serverless-s3-local](https://github.com/ar90n/serverless-s3-local) plugin will create a temporary directory to store mock S3 info. You must use the AWS CLI to trigger events locally. For that, set up a new profile, i.e.:
```
 aws configure --profile s3local 
``` 
The default credentials are
```
aws_access_key_id = S3RVER
aws_secret_access_key = S3RVER
```

Then, execute:
```
aws --endpoint-url=http://localhost:8080 s3 cp <path-to-file> s3://localBucket/ --profile s3local
```
