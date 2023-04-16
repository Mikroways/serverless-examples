# Cron schedule example

In this example we trigger a Lambda function using a cron schedule

## Usage

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/aws/cron-schedule-example -n my-project
```

## Install dependencies
This repository uses NodeJs 16.x. Once you are using said version, install the NodeJs dependencies by running:

```
npm install
```

## Deployment

First, you need to configure your AWS credentials; there are different ways to do so explained on the [official documentation](https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-configure.html). After that, run:
```
npm run sls:deploy -- --stage <stage>
```
The serverless deploy command deploys your entire service via CloudFormation.

## Local development

We are using the [serverless-offline](https://github.com/dherault/serverless-offline) plugin for local development. This Serverless plugin emulates AWS λ and API Gateway on your local machine. To start the local server run:
```
npm run sls:offline -- --stage <stage>
```
