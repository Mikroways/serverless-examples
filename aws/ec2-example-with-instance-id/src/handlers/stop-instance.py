import boto3
import os

region = os.getenv("AWS_REGION")
ec2 = boto3.resource('ec2', region_name=region)


def stop(event, context):
    instance_id = os.getenv("EC2_INSTANCE_ID")
    instances = [instance_id]

    ec2.instances.filter(InstanceIds=instances).stop()
    print('Stopped your instance: ' + str(instances))
