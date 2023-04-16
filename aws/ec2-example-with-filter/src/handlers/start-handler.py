import boto3
import os

region = os.getenv("AWS_REGION")
ec2 = boto3.resource('ec2', region_name=region)

def start(event, context):
    filters = [
        {
            'Name': 'tag:PowerOnOff',
            'Values': ['true']
        }
    ]

    instances = ec2.instances.filter(Filters=filters)
    Instances = [instance.id for instance in instances]

    ec2.instances.filter(InstanceIds=Instances).start()
    print('Started your instances: ' + str(instances))
