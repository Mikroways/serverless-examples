# Powering on/off EC2 Instance using the Instance ID

This example creates an EC2 Instance, VPC, Subnet, Security Groups and 2 Lambda Functions to power on and off the created EC2 instance, using the instance ID

## Usage

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/aws/ec2-example-with-instance-id -n my-project
```

### Installing dependencies

This repository uses NodeJs 16.x. Once you are using said version, install the NodeJs dependencies by running:

```
npm install
```

And to install the Pyhton dependencies run:

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
