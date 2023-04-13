# Power on/off EC2 Instance using a tag

This example uses lambda functions to power on and off EC2 instances that have the tag "PowerOnOff".

## Usage

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/aws/ec2-example-with-filter -n my-project
```

### Installing dependencies
To install the pyhton dependencies run:
```
npm run sls:requirements:install
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

This project uses the [.env.local](.env.local) file to configure the local environment.