# Cron schedule example

In this example we trigger a Lambda function using a cron schedule

## Usage

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/aws/cron-schedule-example -n my-project
```

## Deployment

First, you need to configure your AWS credentials; there are different ways to do so explained on the [official documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html). After that, run:
```
npm run sls:deploy -- --stage <stage>
```

## Local development

To start the local server run:
```
npm run sls:offline
```