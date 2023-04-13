<div align="center">
<p>
    <img
        style="width: 200px"
        width="200"
        src="https://avatars.githubusercontent.com/u/11018852?s=200&v=4"
    >
</p>
</div>

# Serverless Examples

This repository contains different examples of use cases for Serverless Framework on multiple providers. Each example has it's own `README.md`

To install any of these, you can run:

```
serverless install -u https://github.com/Mikroways/serverless-examples/tree/main/folder-name -n project-name
```

## AWS Lambda

| Example                                                                           |                                                                             | Runtime |
| --------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------- |
| [HTTP Example](aws/http-example/)                                                 | Simple HTTP example with three endpoints                                    | NodeJS  |
| [Cron Schedule](aws/cron-schedule-example/)                                       | Example using a cron schedule to trigger a Lambda                           | NodeJS  |
| [Start and Stop EC2 Instance with instance ID](aws/ec2-example-with-instance-id/) | Example of starting and stopping an EC2 instance using the instance id      | Pyhton  |
| [Start and Stop EC2 Instance using tags](aws/ec2-example-with-filter/)            | Example of starting and stopping an EC2 instance filtering by instance tags | Python  |
| [Local S3 Bucket](aws/s3-example/)                                                | Example of a Lambda triggered by an event using a local S3 bucket           | NodeJS  |

## Google Cloud Functions

To Do

## Microsoft Azure Functions

| Example                             |                                        | Runtime |
| ----------------------------------- | -------------------------------------- | ------- |
| [HTTP Example](azure/http-example/) | Simple HTTP example with two endpoints | NodeJS  |
