import boto3
import json
import urllib.parse
import time
import decimal

dynamodb=boto3.resource('dynamodb')

def lambda_handler(event, context):
    kintoresequence=dynamodb.Table('kintoresequence')
    user_info=urllib.parse.parse_qs(event['body'])
    regist_content={
        'id':next_seq(kintoresequence,'kintore'),
        'weight':user_info['weight'][0]
    }
    print(regist_content)
    regist_kintore_menu(regist_content)
    return {
        'statusCode': '200',
        'headers': {
            'Content-Type': 'text/html',
        },
        'body':'<html><body>OK</body></html>'
    }
    
def regist_kintore_menu(regist_content):
    table=dynamodb.Table('kintoremenu')
    table.put_item(
        Item={
            'id':regist_content['id'],
            'weight':regist_content['weight'],
            'regist_date_time':str(time.time())
        }
    )

def next_seq(table,tablename):
    response=table.update_item(
        Key={
            'tablename':tablename
        },
        UpdateExpression="set seq=seq+:val",
        ExpressionAttributeValues={
            ':val':1
        },
        ReturnValues='UPDATED_NEW'
    )
    return response['Attributes']['seq']